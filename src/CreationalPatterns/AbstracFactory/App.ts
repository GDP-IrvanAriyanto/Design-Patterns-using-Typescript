import { Game } from "./Game";
import { GameFactoryEasy, GameFactoryMedium, GameFactoryHard } from "./GameFactory";

const gameEasy = new Game(new GameFactoryEasy());
gameEasy.start();

const gameMedium = new Game(new GameFactoryMedium());
gameMedium.start();