/**
 * Created by 周婷 on 2017/4/21.
 */
function Components(component){
    console.log('seletor: '+component.selector);
    console.log('seletor: '+component.template);
    console.log('component init');
    return (target: any)=>{
        console.log('component call');
        return target;
    }
}

function Directive(){
    console.log('directive init');
    return (target: any)=>{
        console.log('directive call');
        return target;
    }
}

@Components({
    selector: 'person',
    template:'person.html'
})
@Directive()
class Persons{

}
let p1 = new Persons();