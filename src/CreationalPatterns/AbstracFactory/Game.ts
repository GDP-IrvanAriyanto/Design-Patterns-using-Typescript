import { GameFactory } from "./GameFactory";

export class Game{
    private level
    private arena
    private enemy

    constructor(gameFactory: GameFactory){
        this.level = gameFactory.createLevel();
        this.arena = gameFactory.createArena();   
        this.enemy = gameFactory.createEnemy(); 
    }

    start(): void{
        this.level.start();
        this.arena.start();
        this.enemy.start();
    }
}