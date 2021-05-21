import { Employee } from "./Employee";

export class EmployeeFactory{
    static createManager(name: string): Employee{
        return new Employee(name, 'Manager', 10000000)
    }

    static createStaf(name: string): Employee{
        return new Employee(name, 'Staf', 5000000)
    }
}