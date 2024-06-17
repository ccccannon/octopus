import horseRace from '../3rd/horseRace';

export const pb = horseRace.pb;

export const MillionProtocol = horseRace.pb.MillionProtocol;

export const protoPlatform = horseRace.com.cw.chess2.platform;

// 获取协议解析的buffer
/**
 * 
 * @param {Object} data message结构体的数据
 * @param {Function} protoStruct message结构体
 * @returns data的二进制数据
 */
export const getProtoBuffer = (data, protoStruct) => {

    //如果数据不存在 或者 结构体不是函数
    if (!data || !(protoStruct instanceof Function)) {
        // console.log('params is invalid', data, protoStruct);
        return null;
    }

    const payload = data;

    const errorMsg = protoStruct.verify(payload);

    if (errorMsg) {
        throw new Error('Please check the payload again to pass verify!');
    }

    const message = protoStruct.create(payload);

    const buffer = protoStruct.encode(message).finish();

    // console.log(buffer, 'getProtoBuffer');

    return buffer;
}

/**
 * 组装用来发送给socket的数据
 * @param {Number} mid  模块号
 * @param {Number} pid  协议号
 * @param {Object} data message结构体的数据
 * @param {Function} protoStruct message结构体的
 */
export const composeSocketData = (mid, pid, data, protoStruct) => {
    try {
        const buffer = getProtoBuffer(data, protoStruct);
        const socketbuffer = customDataPack(mid, pid, buffer);
        return socketbuffer;
    } catch (error) {
        console.log(error);
    }
}



// 获取buffer的长度
export const getBufferLength = (buffer) => {

    if (buffer === null || buffer === undefined) {
        return 0;
    }

    if (buffer instanceof Uint8Array) {
        return buffer.byteLength;
    }

    if (buffer instanceof ArrayBuffer) {
        return buffer.byteLength;
    }

    throw new Error('Sorry, the params is invalid');

}


// 自定义数据封包

export const customDataPack = (mId, pId, buffer) => {

    const len_data = 2;
    const len_mid = 2;
    const len_pid = 2;
    const len_space = 4;

    let uint8Buffer;

    const len_buffer = getBufferLength(buffer);

    const len_total = len_data + len_mid + len_pid + len_space + len_buffer;

    const arrayBuffer = new ArrayBuffer(len_total);

    const dataview = new DataView(arrayBuffer);

    dataview.setUint16(0, len_total, true);

    dataview.setUint16(len_data, mId, true);

    dataview.setUint16(len_mid + len_data, pId, true);

    dataview.setUint32(len_data + len_mid + len_pid, 0, true);

    uint8Buffer = new Uint8Array(arrayBuffer);

    if (len_buffer > 0) {
        uint8Buffer.set(buffer, 10);
    }

    return uint8Buffer;
}


// 自定义数据解包
export const customDataUnPack = (buffer) => {

    // console.log(buffer,'自定义数据解包buffer');

    // console.log(buffer instanceof Uint8Array,'自定义数据解包');

    if ((buffer instanceof Uint8Array)) {
        buffer = buffer.buffer;
    }

    const dataView = new DataView(buffer);

    const bodyLen = dataView.getUint16(0, true);

    const mid = dataView.getUint16(2, true);

    const pid = dataView.getUint16(4, true);

    const uint8 = new Uint8Array(buffer);

    const msgBinary = uint8.slice(10, bodyLen);

    // console.log(msgBinary, '**********************接收到的buffer');

    return { mid, pid, msgBinary };

}


export const net_struct_new_with_protobuf = (typePro, protocol, buffer) => {
    var buf_size = 0;
    if (buffer != null)
        buf_size = buffer.length;
    var data = null;
    if (buf_size > 0) {
        data = {
            length: 10 + buf_size,  // short
            type: typePro,    // short
            protocol: protocol,    // short
            uid: 0,  // int
            data: new Array(buf_size) // n bit
        };

        for (var i = 0; i < buf_size; i++)
            data.data[i] = buffer[i];
    }
    else {
        data = {
            length: 10,  // short
            type: typePro,    // short
            protocol: protocol,    // short
            uid: 0,  // int
            data: null,
        };

    }
    return data;
}


export const send_net_raw_data = (ws, proto) => {
    var buf = new Uint8Array(proto.length);
    for (var i = 0; i < buf.length; i++)
        buf[i] = 0;

    var offset = 0;

    // length:0
    var bytes = getShortBytes(proto.length); //proto长度 2
    arraycopy(bytes, 0, buf, offset, bytes.length);
    offset += bytes.length;

    // type:2
    var bytes = getShortBytes(proto.type); //网关 2
    arraycopy(bytes, 0, buf, offset, bytes.length);
    offset += bytes.length;

    // protocol:4
    var bytes = getShortBytes(proto.protocol); //protocol 2
    arraycopy(bytes, 0, buf, offset, bytes.length);
    offset += bytes.length;

    // uid:6
    var bytes = getIntBytes(proto.uid); //uid 4
    arraycopy(bytes, 0, buf, offset, bytes.length);
    offset += bytes.length;

    // data:n       
    if (proto.data != null) //
    {
        arraycopy(proto.data, 0, buf, offset, proto.data.length);
        offset += proto.data.length;
    }

    // return buf;

    if (ws != null && ws.readyState == 1) {

        console.log(buf);
        ws.send(buf);

    }
}



const getShortBytes = (x) => {
    var bytes = [];
    var i = 0;
    do {
        bytes[i++] = x & (255);
        x = x >> 8;
    } while (i <= 1)

    return bytes;
}

const arraycopy = (src, offset, target, target_offset, length) => {
    for (var i = 0; i < length; i++)
        target[target_offset + i] = src[offset + i];
}

const getIntBytes = (x) => {
    // cc.log("---int start--- data = ",x)
    var bytes = [];
    var i = 0;
    do {
        bytes[i++] = x & (255);
        x = x >> 8;
    } while (i <= 3)
    // cc.log(bytes)
    // cc.log("---int end---")
    return bytes;
}