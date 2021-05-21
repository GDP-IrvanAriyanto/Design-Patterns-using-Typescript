export interface Animal{
    speak(): void;
}

/**
 * @deprecated
 */
export class Tiger implements Animal{
    speak(): void {
        console.log("How");
    }
}

export class Tiger2 implements Animal{
    speak(): void{
        console.log("How how");
    }
}

export class Cat implements Animal{
    speak(): void {
        console.log("Meow");
    }

}