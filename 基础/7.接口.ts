/**
 * Created by Leslie on 2017/4/16.
 */
// 属性类型接口
interface FullName{
    firstName: string;
    secondName: string;
}

function printLabel(name: FullName){
    console.log(name.firstName, name.secondName);
}
let myObj = {age: 10, firstName: "Jim", secondName:"Raynor"};
printLabel(myObj);

// 函数类型接口
interface encrypt {
    (val: string, salt: string): string;
}
let md5: encrypt;
md5 = function (val: string, salt: string) {
    let encryptValue = val + ":" + salt;
    console.log("encryptValue:" + encryptValue);
    return encryptValue;
}
let pwd = md5("password", "Angular");

/**
 * 可索引类型接口
 * TODO 可索引类型接口用来描述那些可以通过索引得到的类型，
 *      比如UserArray[1]、user-Object["name"]等。它包含一个索引签名，
 */
interface UserArray{
    [index: number]: string;
}
