/**
 * Created by 周婷 on 2017/4/18.
 */
@Component({
    selector: 'person',
    template: 'person.html'
})
class Person{
    constructor(
        public firstName: string,
        public secondName: string
    ){}
}

// 装饰器调用
function Component(component){
    console.log(component);// { selector: 'person', template: 'person.html' }
    return (target: any)=>{
        console.log(target);//[Function: Person]
        //return componentClass(target, component)
    }
}
function componentClass(target: any, component?:any):any{
    var original = target; // [Function: Person]
    function constructor(constructor, args){
        let c: any = function () {
            return constructor.apply(this, args)
        }
        c.prototype = constructor.prototype;
        return new c;
    }
    let f:any = (...args) => {
        console.log("selector: " + component.selector);
        console.log("template: " + component.template);
        console.log(`Person: ${original.name}(${JSON.stringify(args)})`);
        return constructor(original, args);
    }
    f.prototype = original.prototype;
    return f;
}

let p  = new Person("Angular", "JS");
