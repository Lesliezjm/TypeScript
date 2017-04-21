/**
 * Created by Leslie on 2017/4/16.
 */
// TODO ES6引入了模块的概念，在TypeScript中也支持模块的使用。

// 模块导出方式
export const COMPANY = "GF"; // 导出常量
export interface IdentityValidate {
    isGfStaff(s: string): boolean;
}
export class ErpIdentityValidate implements IdentityValidate {
    isGfStaff(erp: string) {
        // return erpService.contains(erp); // 判断是否是内部员工
        return true;
    }
}
// 导出语句重命名
class Erp2IndentityValidate implements IdentityValidate {
    isGfStaff(erp: string) {
        return true;
    }
}
export {Erp2IndentityValidate};
export {Erp2IndentityValidate as GFIndentityValidate};

// 模块包装
export {Erp2IndentityValidate as RegExpBaseZipCodeValidator} from "./6.模块";
export * from "./6.模块";
export * from "./6.模块";

// 模块导入方式
// import {Erp3IndentityValidate} from "./6.模块";
