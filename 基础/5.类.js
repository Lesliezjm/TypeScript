/**
 * Created by Leslie on 2017/4/16.
 */
// 类的例子
/*class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    drive(distanceInMeters: number) {
        console.log(`A car runs ${distanceInMeters}m powered by ` + this.engine);
    }
}
let car = new Car('petrol');
car.drive(100);*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承与多态
/*class MotoCar extends Car {
    constructor(engine: string) {
        super(engine);
    }
}
class Jeep extends Car {
    constructor(engine: string) {
        super(engine);
    }

    drive(distanceInMeters: number = 100) {
        console.log('Jeep...');
        return super.drive(distanceInMeters)
    }
}
let tesla = new MotoCar('electricity'); // 继承
let landRover: Car = new Jeep('petrol'); // 实现多态

tesla.drive(200); // 调用父类的drive()方法
landRover.drive(300); // 父类引用调用子类的drive()方法*/
// 修饰符
// public private protected
// TypeScript里，每个成员默认public，可以被自由的访问，也可以显式地给类里定义的成员加上public
/*
class Car {
    public engine: string;

    public constructor(engine: string) {
        this.engine = engine;
    }

    public drive(distanceInMeters: number) {
        console.log(`A car runs ${distanceInMeters}m powered by ` + this.engine);
    }
}*/
// private修饰符
/*class Car{
    private engine: string;
    constructor(engine: string){
        this.engine = engine;
    }
}

new Car('petrol').engine; // 报错：engine属性是私有的，只能在类内部访问*/
// protected修饰符
/*class Car {
    protected engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    drive(distanceInMeters: number) {
        console.log(`A car runs ${distanceInMeters}m powered by ` + this.engine);
    }
}

class MotoCar extends Car {
    constructor(engine: string) {
        super(engine);
    }
    drive(distanceInMeters: number = 50) {
        console.log('Moto...');
        console.log(this.engine);
        return super.drive(distanceInMeters)
    }
}
let tesla = new MotoCar('electricity');
console.log(tesla.drive());
// console.log(tesla.engine); // 报错*/
// 参数属性
/*
class Car {

    constructor(protected engine: string) {}

    drive(distanceInMeters: number = 0) {
        console.log(`A car runs ${distanceInMeters}m powered by ` + this.engine);
    }
}

new Car('V8').drive();*/
// 静态属性
/*class Grid {
    static orign = {x: 0, y: 0};

    constructor(public scale: number) {}

    calculateDistanceFromOrign(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.orign.x);
        let yDist = (point.y - Grid.orign.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrign({x: 4, y: 3}));//5
console.log(grid2.calculateDistanceFromOrign({x: 4, y: 3}));//1*/
// 抽象类
var Person = (function () {
    function Person() {
    }
    Person.prototype.walk = function () {
        console.log('Walking on the road');
    };
    return Person;
}());
var Male = (function (_super) {
    __extends(Male, _super);
    function Male() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Male.prototype.speak = function () {
        console.log('How are you');
    };
    return Male;
}(Person));
var person;
// person = new Person(); // 报错，不能创建抽象类实例
person = new Male();
person.speak();
person.walk();
/**
 * todo: 在面向对象设计中，抽象类和接口是经常讨论的话题，在TypeScript中也一样。简单来说，接口更注重功能的设计，抽象类更注重结构内容的体现
 */
//# sourceMappingURL=5.类.js.map