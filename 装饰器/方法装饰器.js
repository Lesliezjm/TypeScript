/**
 * Created by 周婷 on 2017/4/18.
 */
// 方法装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TestClass = (function () {
    function TestClass() {
    }
    TestClass.prototype.testMethod = function (arg) {
        return "logMsg: " + arg;
    };
    return TestClass;
}());
__decorate([
    log
], TestClass.prototype, "testMethod", null);
// 下面的方法装饰器@log的实现
function log(target, propertyKey, descriptor) {
    var origin = descriptor.value;
    console.log(target); // TestClass { testMethod: [Function] }
    console.log(propertyKey); // testMethod
    console.log(descriptor); //{value: [Function],writable: true,enumerable: true,configurable: true }
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("args: " + JSON.stringify(args)); // 调用前
        var result = origin.apply(this, args); // 调用方法
        console.log("The result-", result); // 调用后
        return result; // 返回结果
    };
    return descriptor;
}
// 测试
new TestClass().testMethod("test method decorator");
//# sourceMappingURL=方法装饰器.js.map