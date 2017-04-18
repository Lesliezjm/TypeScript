/**
 * Created by 周婷 on 2017/4/18.
 */
// 方法装饰器

class TestClass {
    @log
    testMethod(arg: string) {
        return "logMsg: " + arg;
    }
}

// 下面的方法装饰器@log的实现
function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let origin = descriptor.value;
    console.log(target);// TestClass { testMethod: [Function] }
    console.log(propertyKey); // testMethod
    console.log(descriptor);//{value: [Function],writable: true,enumerable: true,configurable: true }
    descriptor.value = function (...args: any[]) {
        console.log("args: " + JSON.stringify(args)); // 调用前
        let result = origin.apply(this, args);// 调用方法
        console.log("The result-", result); // 调用后
        return result; // 返回结果
    }
    return descriptor;
}

// 测试
new TestClass().testMethod("test method decorator");