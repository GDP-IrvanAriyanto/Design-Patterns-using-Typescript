import { AnimalFactory } from "./AnimalFactory";
import { EmployeeFactory } from "./EmployeeFactory";

const manager1 = EmployeeFactory.createManager('Eko');
const manager2 = EmployeeFactory.createManager('Budi');
const staf1 = EmployeeFactory.createStaf('Joko');
const staf2 = EmployeeFactory.createStaf('Agung');

const tiger = AnimalFactory.create('tiger');
const cat = AnimalFactory.create('cat');