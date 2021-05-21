export class Employee {
  private name: string;
  private title: string;
  private salary: number;

  public constructor(name: string, title: string, salary: number) {
    this.name = name;
    this.title = title;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  getTitle(): string {
    return this.title;
  }

  getSalary(): number {
    return this.salary;
  }
}
