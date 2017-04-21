/**
 * Created by Leslie on 2017/4/15.
 */
///////////////let/////////////////////
var hello = "Hello Angular";
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    // return b; // 错误， b没有被定义
}
// a++;// 错误，在声明前使用是不合法的
// let a;
function funA(x) {
    // let x  = 100;// 报错，x已经在函数形参声明
}
// 增加了判断条件组成的新块级作用域
function funB(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
funB(false, 0); // 0
funB(true, 0); // 100
//////////////const////////////////////
var CAT_LIVES_NUM = 9;
var kitty = {
    name: 'Aurora',
    numLives: CAT_LIVES_NUM
};
// 错误
// kitty = {
//     name: 'Danielle',
//     numLives: CAT_LIVES_NUM
// }
kitty.name = "Danielle";
kitty.numLives--;
////////////////////解构//////////////////
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
_a = [second, first], first = _a[0], second = _a[1];
console.log(first);
console.log(second);
function fn(_a) {
    var first = _a[0], second = _a[1];
    console.log(first + second);
}
fn([1, 2]);
// rest
var _b = [1, 2, 3, 4, 5], f1 = _b[0], rest = _b.slice(1);
console.log(f1);
console.log(rest);
// 对象解构
var test = { x: 0, y: 100, width: 15, height: 20 };
var x = test.x, y = test.y, width = test.width, height = test.height;
console.log(x, y, width, height);
var _a;
//# sourceMappingURL=3.声明和解构.js.map