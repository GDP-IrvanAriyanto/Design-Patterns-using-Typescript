import { Singleton } from "./Singleton"

function clientCode(){
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    if(singleton1 === singleton2){
        console.log('Singleton works, both variables contain the same instance.');
    }else{
        console.log('Singleton failed, variables contain different instance.');
    }
}


clientCode();