function printLabel(name) {
    console.log(name.firstName, name.secondName);
}
var myObj = { age: 10, firstName: "Jim", secondName: "Raynor" };
printLabel(myObj);
var md5;
md5 = function (val, salt) {
    var encryptValue = val + ":" + salt;
    console.log("encryptValue:" + encryptValue);
    return encryptValue;
};
var pwd = md5("password", "Angular");
//# sourceMappingURL=7.接口.js.map