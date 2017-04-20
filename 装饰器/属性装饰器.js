var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by 周婷 on 2017/4/20.
 */
var Student = (function () {
    function Student() {
    }
    return Student;
}());
__decorate([
    test
], Student.prototype, "name", void 0);
function test(target, propertyKey) {
    console.log(target); // Student {}
    console.log(propertyKey); // name
}
//# sourceMappingURL=属性装饰器.js.map