import { Animal, Cat, Tiger, Tiger2 } from "./Animal";

export class AnimalFactory{
    public static create(type: string): Animal | undefined{
        if(type === 'tiger'){
            return new Tiger2();
        }else if(type === 'cat'){
            return new Cat();
        }
    }
}