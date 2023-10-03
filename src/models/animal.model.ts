export abstract class Animal {
  constructor(
    protected name: string
    ) {}

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }

  greeting() {
    console.log(`Hello, my name is ${this.name}`);
  }

  protected doSomething() {
    console.log(`I'm doing something`);
  }
}
