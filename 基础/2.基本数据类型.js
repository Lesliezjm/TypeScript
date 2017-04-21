/**
 * Created by Leslie on 2017/4/15.
 */
var flag = true;
// flag = 1; // 报错
var binaryLiteral = 10;
var octalLiteral = 484;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var myName = "Angular";
var years = 5;
var words = "\u4F60\u597D\uFF0C\u4ECA\u5E74\u662F" + myName + "\u53D1\u5E03" + (years + 1) + "\u5468\u5E74";
var arr = [1, 2];
var arr2 = [2, 3];
var x;
x = ['Angular', 25];
// x = [10,'Angular'];// 报错
console.log(x[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 2] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Blue"] = 6] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color.Red;
console.log(c2);
var z = 4;
z = "I am a String";
// x.ifItExists();
// x.toFixed();
var arrayList = [1, true, 'false'];
arrayList[1] = 100;
var y;
y = 1;
y = undefined;
y = null;
// void
function hello() {
    // alert('Hello Angular');
    console.log('Hello Angular');
}
function func(foo) {
    var f = foo();
    // f.doSth(); // 报错
}
// never
var i;
var j;
i = (function () {
    throw new Error('exception occur');
})();
j = (function () {
    throw new Error('exception occur');
})();
function error(message) {
    throw new Error(message);
}
function loop() {
    while (true) {
    }
}
//# sourceMappingURL=2.基本数据类型.js.map