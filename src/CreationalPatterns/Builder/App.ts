import { CustomerBuilder } from "./CustomerBuilder";

const customer1 = new CustomerBuilder()
.setFirstName('Eko')
.setPhone('085')
.setEmail('eko@gmail.com')
.build();

const customer2 = new CustomerBuilder()
.setFirstName('Eko')
.setEmail('eko@gmail.com')
.build();

const customer3 = new CustomerBuilder()
.setFirstName('Eko')
.setPhone('085')
.build();