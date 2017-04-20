/**
 * Created by 周婷 on 2017/4/20.
 */
class Student{
    @test name: string
}

function test(target: any, propertyKey: string|symbol){
    console.log(target);// Student {}
    console.log(propertyKey); // name
}