

import { ByteArray, Endian } from "./ByteArray";
import { BaseObject } from "./Serializer";
/**
 * 对象序列化
 */
export class ObjectSerializer {

    //true读取，false写入
    public readonly readMode: boolean;
    //二进制
    public readonly srcBytes: ByteArray;

    /**
     * 是否可以读取，用来判断是否要继续读，为了兼容老版本的客户端没有发全消息的时候可以继续跑，避免继续使用 unuse_x 字段
     * add by DerekWu
     */
    private canRead: boolean = true;

    /** 当前正在序列化的子对象列表，有层级关系  */
    private currSubObjectList: Array<BaseObject> = null;
    /** 当前正在序列化的子对象  */
    private currSubObject: BaseObject = null;

    constructor(readMode: boolean = false, srcBytes: ByteArray) {
        this.readMode = readMode;
        // if (readMode) {
        //     if (!srcBytes) {
        //     }
            
        // } else {
        //     //写模式说明即将要往服务端发送消息，消息内容不会太大
        
        //     this.srcBytes = new ByteArray();
        //     // this.srcBytes = new allogret.ByteArray();
        // }
        this.srcBytes = srcBytes;
        //使用小端格式
        this.srcBytes.endian = Endian.LITTLE_ENDIAN;
    }

    private getCurrSubObjectList(): Array<BaseObject> {
        if (this.currSubObjectList == null) {
            this.currSubObjectList = new Array<BaseObject>();
        }
        return this.currSubObjectList;
    }

    /**
     * 升级当前处理的子对象
     * @param baseObject
     */
    private upCurrSubObject(baseObject: BaseObject): void {
        this.getCurrSubObjectList().push(baseObject);
        this.currSubObject = baseObject;
    }

    /**
     * 降级当前处理的子对象
     * @param baseObject
     */
    private downCurrSubObject(baseObject: BaseObject): void {
        let baseObjectList: Array<BaseObject> = this.getCurrSubObjectList();
        // 删除最后一个
        baseObjectList.splice(baseObjectList.length - 1, 1);
        if (baseObjectList.length >= 1) {
            let downCurrSubObject: BaseObject = baseObjectList[baseObjectList.length - 1];
            this.currSubObject = downCurrSubObject;
        } else {
            this.currSubObject = null;
        }
    }

    /**
     * 序列化子对象开始
     * @param baseObject
     */
    private sSubObjectStart(baseObject: BaseObject): void {
        baseObject.startPosition = this.srcBytes.position;
        this.upCurrSubObject(baseObject);
    }

    /**
     * 序列化子对象结束
     * @param baseObject
     */
    private sSubObjectEnd(baseObject: BaseObject): void {
        let self = this;
        if (self.readMode) {
            if (baseObject) {
                // 看看还有没有读完的字节，有的话，移动位置
                if (baseObject.byteSize > 0) {
                    self.srcBytes.position = (self.srcBytes.position + baseObject.byteSize);
                }
                // 降级
                self.downCurrSubObject(baseObject);
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= (4 + (self.srcBytes.position - baseObject.startPosition));
                }
            } else {
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 4;
                }
            }
        } else {
            // 将长度写入到开始位置
            if (baseObject) {
                let endPosition: number = self.srcBytes.position;
                // 定位到写长度的位置，写入以写长度
                self.srcBytes.position = (baseObject.startPosition);
                self.srcBytes.writeInt(baseObject.byteSize);
                self.srcBytes.position = (endPosition);
                // 降级
                self.downCurrSubObject(baseObject);
                if (self.currSubObject) {
                    self.currSubObject.byteSize += (self.srcBytes.position - baseObject.startPosition);
                }
            } else {
                if (self.currSubObject) {
                    self.currSubObject.byteSize += 4;
                }
            }
        }
    }

    /**
     * 兼容老版本
     * @param baseObj
     * @param clazz
     * @return
     */
    public sObject<T extends BaseObject>(baseObj: T, clazz: Function): T {
        return this.sSubObject(baseObj, clazz);
    }

    /**
     * 序列化子对象
     * @param baseObj
     * @param clazz
     * @return
     */
    public sSubObject<T extends BaseObject>(baseObj: T, clazz: Function): T {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                let objLength: number = self.srcBytes.readInt();
                if (objLength == 0) {
                    baseObj = null;
                } else {
                    baseObj = new (<any>clazz);
                    baseObj.byteSize = objLength;
                    // 序列化子对象开始
                    self.sSubObjectStart(baseObj);
                    baseObj.serialize(this);
                }
                self.sSubObjectEnd(baseObj);
            } else {
                if (self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sSubObject error .....");
            }
        } else {
            if (baseObj) {
                self.sSubObjectStart(baseObj);
                self.srcBytes.writeInt(0);
                baseObj.serialize(this);
            } else {
                self.srcBytes.writeInt(0);
            }
            self.sSubObjectEnd(baseObj);
        }
        return baseObj;
    }

    /**
     * 验证是否可读
     * @param readLength
     * @return
     */
    private checkRead(readLength: number): boolean {
        if (!this.currSubObject) {
            return this.canRead && this.srcBytes.bytesAvailable >= readLength;
        } else {
            return this.canRead && this.srcBytes.bytesAvailable >= readLength && this.currSubObject.byteSize >= readLength;
        }
    }

    /**
     * 序列化一个布尔值
     * @param {Boolean} value
     * @returns {Boolean}
     */
    public sBoolean(value: boolean): boolean {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(1)) {
                let temp: number = self.srcBytes.readByte();
                if (temp === 0) {
                    value = false;
                } else {
                    value = true;
                }
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 1;
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sBoolean error .....");
            }
        } else {
            if (value) {
                self.srcBytes.writeByte(1);
            } else {
                self.srcBytes.writeByte(0);
            }
            if (self.currSubObject) {
                self.currSubObject.byteSize += 1;
            }
        }
        return value;
    }

    /**
     * 序列化一个整型变量
     */
    public sInt(value: number): number {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                value = self.srcBytes.readInt();
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 4;
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sInt error .....");
            }
        } else {
            self.srcBytes.writeInt(value);
            if (self.currSubObject) {
                self.currSubObject.byteSize += 4;
            }
        }
        return value;
    }

    /**
     * 序列化一个Byte
     */
    public sByte(value: number): number {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(1)) {
                value = self.srcBytes.readByte();
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 1;
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sByte error .....");
            }
        } else {
            self.srcBytes.writeByte(value);
            if (self.currSubObject) {
                self.currSubObject.byteSize += 1;
            }
        }
        return value;
    }

    /**
     * 序列化一个Bytes 
     */
    public sBytes(byteArray: ByteArray): ByteArray {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                let bytes_size: number = self.srcBytes.readInt();
                if (bytes_size > 0) {
                    byteArray = new ByteArray();
                    self.srcBytes.readBytes(byteArray, 0, bytes_size);
                } else {
                    byteArray = null;
                    // bytes_size = 0;
                }
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= (4 + bytes_size);
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                //logger.debug("## sBytes error .....");
            }
        } else {
            let bytes_size: number = 0;
            if (byteArray) {
                bytes_size = byteArray.length;
            }
            self.srcBytes.writeInt(bytes_size);
            if (bytes_size > 0) {
                self.srcBytes.writeBytes(byteArray);
            }
            if (self.currSubObject) {
                self.currSubObject.byteSize += (4 + bytes_size);
            }
        }
        return byteArray;
    }

    // /**
    //  * 序列化一个Bytes, 主要写入的时候，可以写一部分
    //  */
    // public sBytesWithOffsetAndSize(value: allogret.ByteArray, data_offset: number, data_size: number): allogret.ByteArray {
    //     if (this.readMode) {
    //         let vByteSize: number = this.srcBytes.readInt();
    //         if (vByteSize > 0) {
    //             value = new allogret.ByteArray();
    //             this.srcBytes.readBytes(value, 0, vByteSize);
    //         } else {
    //             value = null;
    //         }
    //     } else {
    //         let vByteSize: number = data_size;
    //         if (!value || (data_offset + data_size) > value.length) {
    //             vByteSize = 0;
    //         }
    //         this.srcBytes.writeInt(vByteSize);
    //         if (!value && vByteSize > 0) {
    //             this.srcBytes.writeBytes(value, data_offset, data_size);
    //         }
    //     }
    //     return value;
    // }


    // /**
    //  * 序列化一个Long   注意value 千万不能传null 进来
    //  */
    // public sLong2(value: dcodeIO.Long): dcodeIO.Long {
    //     if (this.readMode) {
    //         let vLow: number = this.srcBytes.readInt();
    //         let vHigh: number = this.srcBytes.readInt();
    //         value = dcodeIO.Long.fromBits(vLow, vHigh);
    //     }
    //     else {
    //         if (!value) value = dcodeIO.Long.ZERO;
    //         let vSrcBytes = this.srcBytes, vArrayNumber: Array<number> = value.toBytes(true), vIndex: number = 0, vLength: number = vArrayNumber.length;
    //         for (; vIndex < vLength; ++vIndex) {
    //             vSrcBytes.writeByte(vArrayNumber[vIndex]);
    //         }
    //     }
    //     //返回
    //     return value;
    // }

    /**
     * 序列化一个Long   注意value 千万不能传null 进来
     */
    public sLong(value: dcodeIO.Long): dcodeIO.Long {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(8)) {
                let vLow: number = this.srcBytes.readInt();
                let vHigh: number = this.srcBytes.readInt();
                value = dcodeIO.Long.fromBits(vLow, vHigh);
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 8;
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sLong error .....");
            }
        } else {
            if (!value) value = dcodeIO.Long.ZERO;
            let vSrcBytes = this.srcBytes, vArrayNumber: Array<number> = value.toBytes(true), vIndex: number = 0, vLength: number = vArrayNumber.length;
            for (; vIndex < vLength; ++vIndex) {
                vSrcBytes.writeByte(vArrayNumber[vIndex]);
            }
            if (self.currSubObject) {
                self.currSubObject.byteSize += 8;
            }
        }
        //返回
        return value;
    }



    /**
     * 序列化一个sDate  注意value 千万不能传null 进来
     */
     public sDate(value: Date): Date {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(8)) {
                let vLow: number = this.srcBytes.readInt();
                let vHigh: number = this.srcBytes.readInt();
                value = new Date(dcodeIO.Long.fromBits(vLow, vHigh).toNumber())
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 8;
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sLong error .....");
            }
        } else {
            let long = dcodeIO.Long.ZERO;
            if (value){
                long = dcodeIO.Long.fromNumber(value.getTime())
            } 
            let vSrcBytes = this.srcBytes, vArrayNumber: Array<number> = long.toBytes(true), vIndex: number = 0, vLength: number = vArrayNumber.length;
            for (; vIndex < vLength; ++vIndex) {
                vSrcBytes.writeByte(vArrayNumber[vIndex]);
            }
            if (self.currSubObject) {
                self.currSubObject.byteSize += 8;
            }
        }
        //返回
        return value;
    }

    /**
     * 序列化一个double变量
     */
    public sDouble(value: number): number {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(8)) {
                value = self.srcBytes.readDouble();
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 8;
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sDouble error .....");
            }
        } else {
            if (value) {
                self.srcBytes.writeDouble(value);
            } else {
                self.srcBytes.writeDouble(0);
            }
            if (self.currSubObject) {
                self.currSubObject.byteSize += 8;
            }
        }
        //返回 
        return value;
    }


    /**
     * 序列化一个double变量
     */
    public sFloat(value: number): number {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                value = self.srcBytes.readFloat();
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 4;
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sFloat error .....");
            }
        } else {
            if (value)
                self.srcBytes.writeFloat(value);
            else
                self.srcBytes.writeFloat(0);

            if (self.currSubObject) {
                self.currSubObject.byteSize += 4;
            }
        }
        //返回 
        return value;
    }


    /**
     * 序列化一个字符串 
     */
    public sString(value: string): string {
        let self = this;
        if (self.readMode) {
            if (this.checkRead(2)) {
                let startPosition: number = self.srcBytes.position;
                value = this.srcBytes.readUTF();
                if (value === "null") {
                    value = null;
                }
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= (self.srcBytes.position - startPosition);
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sString error .....");
            }

        } else {
            let startPosition: number = self.srcBytes.position;
            if (!value && value !== "") {
                this.srcBytes.writeUTF("null");
            } else {
                this.srcBytes.writeUTF(value);
            }
            if (self.currSubObject) {
                self.currSubObject.byteSize += (self.srcBytes.position - startPosition);
            }
        }
        //返回 
        return value;
    }

    // /**
    //  * 序列化一个从baseobject继承下来的简单数据对象
    //  */
    // public sObject(value: IBaseObject): IBaseObject {
    //     if (this.readMode) {
    //         let className: string = this.srcBytes.readUTF();
    //         let vBaseObject: IBaseObject = null;
    //         if (className !== "null") {
    //             vBaseObject = SerializerCache.constructObjByName(className);
    //         }
    //         //
    //         value = vBaseObject;
    //         //
    //         if (vBaseObject) {
    //             vBaseObject.serialize(this);
    //         }
    //     } else {
    //         if (value) {
    //             let vSClassName: string = value.sClassName;
    //             if (vSClassName === "null") {
    //                 allogret.error("vSClassName is null");
    //             } else {
    //                 this.srcBytes.writeUTF(vSClassName);
    //                 value.serialize(this);
    //             }
    //         } else {
    //             this.srcBytes.writeUTF("null");
    //         }
    //     }
    //     //返回
    //     return value;
    // }

    // /**
    //  * 序列化一个数组对象
    //  */
    // public sObjArray(array: Array<IBaseObject>): Array<IBaseObject> {
    //     let array_length: number = 0;
    //     if (this.readMode) {
    //         array_length = this.srcBytes.readInt();
    //         array = [];
    //         //
    //         if (array_length > 0) {
    //             let class_name: string = this.srcBytes.readUTF();
    //
    //             //
    //             for (let i = 0; i < array_length; i++) {
    //                 let obj: IBaseObject = null;
    //                 if (class_name !== "null")
    //                     obj = SerializerCache.constructObjByName(class_name);
    //
    //                 if (obj) {
    //                     obj.serialize(this);
    //                 }
    //                 array.push(obj);
    //             }
    //         }
    //         //
    //     }
    //     else//写入
    //     {
    //         if (!array) {
    //             array_length = 0;
    //         } else {
    //             array_length = array.length;
    //         }
    //         //
    //         this.srcBytes.writeInt(array_length);
    //         //
    //         if (array_length > 0) {
    //             let obj0: IBaseObject = array[0];
    //             let vClassName: string = obj0.sClassName;
    //             this.srcBytes.writeUTF(vClassName);
    //             //
    //             for (let i = 0; i < array_length; i++) {
    //                 let obj: IBaseObject = array[i];
    //                 obj.serialize(this);
    //             }
    //         }
    //     }
    //     return array;
    // }

    /**
     * 兼容老版本
     * @param baseObj
     * @param clazz
     * @return
     */
    public sObjArray<T extends BaseObject>(array_obj: Array<T>, clazz: Function): Array<T> {
        return this.sSubObjArray(array_obj, clazz);
    }

    /**
     * 序列化列表
     * @param array_obj
     * @param clazz
     * @return
     */
    public sSubObjArray<T extends BaseObject>(array_obj: Array<T>, clazz: Function): Array<T> {
        let array_length: number = 0;
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                array_length = self.srcBytes.readInt();
                array_obj = [];
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= 4;
                }
                //
                if (array_length > 0) {
                    for (let i = 0; i < array_length; i++) {
                        let obj: T = self.sSubObject(null, clazz);
                        array_obj.push(obj);
                    }
                }
                //
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sSubObjArray error .....");
            }
        } else {
            // 写入
            if (!array_obj) {
                array_length = 0;
            } else {
                array_length = array_obj.length;
            }
            //
            self.srcBytes.writeInt(array_length);
            if (self.currSubObject) {
                self.currSubObject.byteSize += 4;
            }
            //
            if (array_length > 0) {
                for (let i = 0; i < array_length; i++) {
                    let obj: T = array_obj[i];
                    self.sSubObject(obj, clazz);
                }
            }
        }
        return array_obj;
    }

    /**
     * int 数组 
     */
    public sIntArray(array: Array<number>): Array<number> {
        let array_length: number = 0;
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                array_length = self.srcBytes.readInt();
                array = [];

                for (let i = 0; i < array_length; i++) {
                    let ii = self.srcBytes.readInt();
                    array.push(ii);
                }
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= (4 + 4 * array_length);
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sIntArray error .....");
            }
        } else {
            if (!array) {
                array_length = 0;
            } else {
                array_length = array.length;
            }
            //
            self.srcBytes.writeInt(array_length);
            //
            for (let i = 0; i < array_length; i++) {
                let obj = array[i];
                self.srcBytes.writeInt(obj);
            }
            if (self.currSubObject) {
                self.currSubObject.byteSize += (4 + 4 * array_length);
            }
        }
        return array;
    }

    /**
     * byte 数组 
     */
    public sByteArray(array: Array<number>): Array<number> {
        let array_length: number = 0;
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                array_length = self.srcBytes.readInt();
                array = [];

                for (let i = 0; i < array_length; i++) {
                    let ii = self.srcBytes.readByte();
                    array.push(ii);
                }
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= (4 + array_length);
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sByteArray error .....");
            }
        } else {
            if (!array) {
                array_length = 0;
            } else {
                array_length = array.length;
            }
            //
            self.srcBytes.writeInt(array_length);
            //
            for (let i = 0; i < array_length; i++) {
                let obj = array[i];
                self.srcBytes.writeByte(obj);
            }

            if (self.currSubObject) {
                self.currSubObject.byteSize += (4 + array_length);
            }
        }
        return array;
    }


    /**
     * string 数组 
     */
    public sStringArray(array: Array<string>): Array<string> {
        let array_length: number = 0;
        let self = this;
        if (self.readMode) {
            if (this.checkRead(4)) {
                let startPosition = self.srcBytes.position;
                array_length = self.srcBytes.readInt();
                array = [];

                for (let i = 0; i < array_length; i++) {
                    let vStr: string = this.srcBytes.readUTF();
                    if (vStr === "null")
                        array.push(null);
                    else
                        array.push(vStr);
                }
                if (self.currSubObject) {
                    self.currSubObject.byteSize -= (self.srcBytes.position - startPosition);
                }
            } else {
                if (!self.currSubObject) {
                    self.canRead = false;
                } else {
                    self.currSubObject.byteSize = 0;
                }
                // logger.debug("## sStringArray error .....");
            }
        } else {
            let startPosition = self.srcBytes.position;
            if (!array) {
                array_length = 0;
            } else {
                array_length = array.length;
            }
            //
            self.srcBytes.writeInt(array_length);
            //
            for (let i = 0; i < array_length; i++) {
                let vStr: string = array[i];
                if (!vStr && vStr != "") {
                    this.srcBytes.writeUTF("null");
                } else {
                    this.srcBytes.writeUTF(vStr);
                }
            }

            if (self.currSubObject) {
                self.currSubObject.byteSize += (self.srcBytes.position - startPosition);
            }
        }
        return array;
    }

}
