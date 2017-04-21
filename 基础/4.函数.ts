/**
 * Created by Leslie on 2017/4/15.
 */
function maxA(x: number, y: number): number {
    return x > y ? x : y;
}

let maxB = function (x: number, y: number): number { return x > y ? x : y;}

// 可选参数
function max(x: number, y?: number):number{
    if(y){
        return x>y?x:y;
    }else{
        return x;
    }
}
let result1 = max(2);
// let result2 = max(2, 4, 7);
let result3 = max(2, 4);

// 默认参数
function maxC(x: number, y =4):number{
    return x > y ? x : y;
}
// let result1 = maxC(2);
// // let result2 = maxC(2, 4, 7);
// let result3 = maxC(2, 4);
// let result4 = maxC(2, undefined);

// 剩余参数
function sum(x: number, ...restOfNumbers: number[]): number {
    let result = x;
    for (let i = 0; i < restOfNumbers.length; i++) {
        result += restOfNumbers[i];
    }
    return result;
}
let result = sum(1,2,3,4,5);
console.log(result)

// 函数重载
function css(config:{});
function css(config:string, value: string);
function css(config:any, value?:any){
    if(typeof config === 'object'){

    }else if(typeof config === 'string'){

    }
}

// 箭头函数
/*let gift = {
    gifts: ["teddy bear", "spiderman", "dinosaur", "Thomas loco", "toy bricks", "Transformers"],
    giftPicker: function () {
        let pickedNumber = Math.floor(Math.random()*6);
        return this.gifts[pickedNumber]
    }
}
let pickGift = gift.giftPicker();
console.log("you get a : ",pickGift()); // 这里的pickGift函数的this指向window而不是gift对象
*/

let gift = {
    gifts: ["teddy bear", "spiderman", "dinosaur", "Thomas loco", "toy bricks", "Transformers"],
    giftPicker: function () {
        // TypeScript提供箭头函数(=>)很好地解决了这个问题，它在函数创建时就绑定了this,而不是在函数调用时
        return()=>{
            let pickedNumber = Math.floor(Math.random()*6);
            return this.gifts[pickedNumber]
        }
    }
}
let pickGift = gift.giftPicker();
console.log("you get a : ",pickGift());
