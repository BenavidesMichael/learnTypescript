export class MyService {
  private static instance: MyService | null = null;

  private constructor(
    private name: string
    ) {}

  static Create(name: string) {
    if (!this.instance) {
      console.log('Create new instance....');
      this.instance = new MyService(name);
    }
    return this.instance;
  }

  getName() {
    return this.name;
  }
}

const myServiceA = MyService.Create('A');
console.log(myServiceA.getName());
const myServiceB = MyService.Create('B');
console.log(myServiceB.getName());
console.log(myServiceA === myServiceB);

