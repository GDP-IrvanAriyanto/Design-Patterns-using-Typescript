import { Customer } from "./Customer";

export class CustomerBuilder {
  private id!: number;
  private firstName!: string;
  private lastName: string = "";
  private email: string = "";
  private phone!: string;
  private age!: number;

  setId(id: number): CustomerBuilder {
    this.id = id;
    return this;
  }

  setFirstName(firstName: string): CustomerBuilder {
    this.firstName = firstName;
    return this;
  }

  setlastName(lastName: string): CustomerBuilder {
    this.lastName = lastName;
    return this;
  }

  setEmail(email: string): CustomerBuilder {
    this.firstName = email;
    return this;
  }

  setPhone(phone: string): CustomerBuilder {
    this.phone = phone;
    return this;
  }

  setAge(age: number): CustomerBuilder {
    this.age = age;
    return this;
  }

  build(): Customer{
      return new Customer(
          this.id,
          this.firstName,
          this.lastName,
          this.email,
          this.phone,
          this.age
      )
  }

  
}
