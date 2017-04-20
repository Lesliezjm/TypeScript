/**
 * Created by 周婷 on 2017/4/20.
 */

class userService{
    // @inject是参数装饰器
    login(id:number, @inject name: string){};
}

function inject(target:any, propertyKey: string|symbol, parameterIndex: number){
    console.log(target);//userService { login: [Function] }
    console.log(propertyKey);//login
    console.log(parameterIndex);//1  参数所在的索引
}
/**
 * TODO 参数装饰器在Angular中被广泛使用，特别是结合reflect-metadata库来支持实验新的Metadata API
 */