/**
 * Created by Leslie on 2017/4/16.
 */
import {IdentityValidate} from "./IdentityValidate";
export class ErpIdentityValidate implements IdentityValidate {
    isGfStaff(erp: string) {
        // return erpService.contains(erp); // 判断是否是内部员工
        console.log('Yes');
        return true;
    }
}
