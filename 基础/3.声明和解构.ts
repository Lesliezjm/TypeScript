/**
 * Created by Leslie on 2017/4/15.
 */
///////////////let/////////////////////
let hello = "Hello Angular";

function f(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
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
        let x = 100;
        return x;
    }
    return x;
}
funB(false, 0); // 0
funB(true, 0); // 100

//////////////const////////////////////
const CAT_LIVES_NUM = 9;
const kitty = {
    name: 'Aurora',
    numLives: CAT_LIVES_NUM
}

// 错误
// kitty = {
//     name: 'Danielle',
//     numLives: CAT_LIVES_NUM
// }

kitty.name = "Danielle";
kitty.numLives--;

////////////////////解构//////////////////
let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

[first, second] = [second, first];
console.log(first);
console.log(second);

function fn([first, second]) {
    console.log(first + second);
}
fn([1,2]);

// rest
let [f1, ...rest] = [1,2,3,4,5];
console.log(f1);
console.log(rest);

// 对象解构
let test = {x:0, y:100, width: 15, height: 20};
let {x, y, width, height } = test;
console.log(x, y, width, height);
