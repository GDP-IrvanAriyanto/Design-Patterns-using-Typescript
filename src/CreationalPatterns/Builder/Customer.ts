export class Customer {
  private id: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phone: string;
  private age: number;

  public constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    age: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.age = age
  }

  getId(): number {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  getAge(): number {
    return this.age;
  }
}
