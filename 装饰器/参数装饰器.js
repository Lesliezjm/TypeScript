/**
 * Created by 周婷 on 2017/4/20.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var userService = (function () {
    function userService() {
    }
    // @inject是参数装饰器
    userService.prototype.login = function (id, name) { };
    ;
    return userService;
}());
__decorate([
    __param(1, inject)
], userService.prototype, "login", null);
function inject(target, propertyKey, parameterIndex) {
    console.log(target); //userService { login: [Function] }
    console.log(propertyKey); //login
    console.log(parameterIndex); //1  参数所在的索引
}
/**
 * TODO 参数装饰器在Angular中被广泛使用，特别是结合reflect-metadata库来支持实验新的Metadata API
 */ 
//# sourceMappingURL=参数装饰器.js.map