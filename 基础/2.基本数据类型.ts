/**
 * Created by Leslie on 2017/4/15.
 */
let flag: boolean = true;
// flag = 1; // 报错

let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

let myName: string = "Angular";
let years: number = 5;
let words: string = `你好，今年是${myName}发布${years + 1}周年`;

let arr: number[] = [1, 2];
let arr2: Array<number> = [2, 3];

let x: [string, number];
x = ['Angular', 25];
// x = [10,'Angular'];// 报错
console.log(x[0]);

enum Color {Red, Green, Blue}
;
let c: Color = Color.Blue;
console.log(c);

enum Color2 {Red = 2, Green, Blue = 6}
;
let c2: Color = Color.Red;
console.log(c2);

let z: any = 4;
z = "I am a String";
// x.ifItExists();
// x.toFixed();

let arrayList: any[] = [1, true, 'false'];
arrayList[1] = 100;

let y: number|undefined|null;
y = 1;
y = undefined;
y = null;

// void
function hello(): void {
    // alert('Hello Angular');
    console.log('Hello Angular');
}

function func(foo: () => void) {
    let f = foo();
    // f.doSth(); // 报错
}

// never
let i: never;
let j: number;
i = (() => {
    throw new Error('exception occur')
})();

j=(()=>{
    throw new Error('exception occur');
})();

function error(message: string):never{
    throw new Error(message);
}

function loop():never{
    while(true){

    }
}

