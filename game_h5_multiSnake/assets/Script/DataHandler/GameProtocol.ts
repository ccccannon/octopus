
import { IProtocolHelper, NetData, IResponseProtocol, IRequestProtocol } from "../Network/NetInterface";

export class GameProtocol implements IProtocolHelper {


    


    getHeadlen(): number {
        // throw new Error("Method not implemented.");
        return 0;
    }
    getHearbeat(): NetData {
        // throw new Error("Method not implemented.");
        
        return null;
    }
    getPackageLen(msg: NetData): number {
        return 0;
    }
    checkResponsePackage(msg: IResponseProtocol): boolean {
        return true;
    }
    handlerRequestPackage(msg: IRequestProtocol): string {
        return msg.callback;
    }

    getPackageId(msg: IResponseProtocol): string {
        return msg.callback;
    }




    handlerResponsePackage(msg: IResponseProtocol): boolean {

        return true;
       
    }




}






