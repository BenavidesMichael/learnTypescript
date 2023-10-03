import { Animal } from "./animal.model";

export class Dog extends Animal {

  constructor(
    public owner: string,
    name: string
    ) { super(name); }

  woof(): void {
    super.doSomething();
    console.log(`Woof! Woof!`);
  }

  move() {
    console.log(`Running...`);
    super.move(5);
  }
}
