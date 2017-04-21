/**
 * Created by Leslie on 2017/4/15.
 */
function maxA(x, y) {
    return x > y ? x : y;
}
var maxB = function (x, y) { return x > y ? x : y; };
// 可选参数
function max(x, y) {
    if (y) {
        return x > y ? x : y;
    }
    else {
        return x;
    }
}
var result1 = max(2);
// let result2 = max(2, 4, 7);
var result3 = max(2, 4);
// 默认参数
function maxC(x, y) {
    if (y === void 0) { y = 4; }
    return x > y ? x : y;
}
// let result1 = maxC(2);
// // let result2 = maxC(2, 4, 7);
// let result3 = maxC(2, 4);
// let result4 = maxC(2, undefined);
// 剩余参数
function sum(x) {
    var restOfNumbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumbers[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var i = 0; i < restOfNumbers.length; i++) {
        result += restOfNumbers[i];
    }
    return result;
}
var result = sum(1, 2, 3, 4, 5);
console.log(result);
function css(config, value) {
    if (typeof config === 'object') {
    }
    else if (typeof config === 'string') {
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
var gift = {
    gifts: ["teddy bear", "spiderman", "dinosaur", "Thomas loco", "toy bricks", "Transformers"],
    giftPicker: function () {
        var _this = this;
        // TypeScript提供箭头函数(=>)很好地解决了这个问题，它在函数创建时就绑定了this,而不是在函数调用时
        return function () {
            var pickedNumber = Math.floor(Math.random() * 6);
            return _this.gifts[pickedNumber];
        };
    }
};
var pickGift = gift.giftPicker();
console.log("you get a : ", pickGift());
//# sourceMappingURL=4.函数.js.map