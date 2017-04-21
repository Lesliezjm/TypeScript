/**
 * Created by Leslie on 2017/4/16.
 */
// TODO ES6引入了模块的概念，在TypeScript中也支持模块的使用。
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
// 模块导出方式
exports.COMPANY = "GF"; // 导出常量
var ErpIdentityValidate = (function () {
    function ErpIdentityValidate() {
    }
    ErpIdentityValidate.prototype.isGfStaff = function (erp) {
        // return erpService.contains(erp); // 判断是否是内部员工
        return true;
    };
    return ErpIdentityValidate;
}());
exports.ErpIdentityValidate = ErpIdentityValidate;
// 导出语句重命名
var Erp2IndentityValidate = (function () {
    function Erp2IndentityValidate() {
    }
    Erp2IndentityValidate.prototype.isGfStaff = function (erp) {
        return true;
    };
    return Erp2IndentityValidate;
}());
exports.Erp2IndentityValidate = Erp2IndentityValidate;
exports.GFIndentityValidate = Erp2IndentityValidate;
// 模块包装
var _6___1 = require("./6.\u6A21\u5757");
exports.RegExpBaseZipCodeValidator = _6___1.Erp2IndentityValidate;
__export(require("./6.\u6A21\u5757"));
__export(require("./6.\u6A21\u5757"));
// 模块导入方式
// import {Erp3IndentityValidate} from "./6.模块";
//# sourceMappingURL=6.模块.js.map