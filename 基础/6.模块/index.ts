/**
 * Created by Leslie on 2017/4/16.
 */

import {ErpIdentityValidate} from "./ErpIdentityValidate";
let erpValidate = new ErpIdentityValidate();

// 别名导入
import {ErpIdentityValidate as Erp} from "./ErpIdentityValidate";
let erpValidate2 = new Erp();

import * as validator from "./ErpIdentityValidate";
let myValidate = new validator.ErpIdentityValidate();
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