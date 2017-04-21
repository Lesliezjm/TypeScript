/**
 * Created by Leslie on 2017/4/16.
 */
"use strict";
exports.__esModule = true;
var ErpIdentityValidate_1 = require("./ErpIdentityValidate");
var erpValidate = new ErpIdentityValidate_1.ErpIdentityValidate();
// 别名导入
var ErpIdentityValidate_2 = require("./ErpIdentityValidate");
var erpValidate2 = new ErpIdentityValidate_2.ErpIdentityValidate();
var validator = require("./ErpIdentityValidate");
var myValidate = new validator.ErpIdentityValidate();
myValidate.isGfStaff("nihao");
/**
 * TODO 模块设计原则：
 *  1. 尽可能的在顶层导出
 *  2. 明确的导出导入的名字，做到面向接口编程
 *  3. 使用命名空间模式导入导出
 *      import * as namespace from './'
 *      let p = new namespace.Person()
 *  4. 使用模块包装进行扩展
 */ 
//# sourceMappingURL=index.js.map