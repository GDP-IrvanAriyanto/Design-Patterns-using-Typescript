import { Store } from "./Store";

const store1: Store = new Store("Toko A", "Jakarta", "Indonesia", "Gadget");

const store2: Store = store1.clone();

store2.setName("Toko B");

console.log(store1.getName())
console.log(store2.getName())
