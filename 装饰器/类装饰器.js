var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by 周婷 on 2017/4/18.
 */
var Person = (function () {
    function Person(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
    return Person;
}());
Person = __decorate([
    Component({
        selector: 'person',
        template: 'person.html'
    })
], Person);
// 装饰器调用
function Component(component) {
    console.log(component); // { selector: 'person', template: 'person.html' }
    return function (target) {
        console.log(target); //[Function: Person]
        //return componentClass(target, component)
    };
}
function componentClass(target, component) {
    var original = target; // [Function: Person]
    function constructor(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c;
    }
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("selector: " + component.selector);
        console.log("template: " + component.template);
        console.log("Person: " + original.name + "(" + JSON.stringify(args) + ")");
        return constructor(original, args);
    };
    f.prototype = original.prototype;
    return f;
}
var p = new Person("Angular", "JS");
//# sourceMappingURL=类装饰器.js.map