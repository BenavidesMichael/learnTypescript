import { Utils } from "../helpers/utils";
import { Animal } from "../models/animal.model";
import { Dog } from "../models/dog.model";

const dog = new Dog('Michael','Rex');
dog.greeting();
dog.woof();
dog.move();

console.log('------------------');
console.log(Utils.PI);
console.log(Utils.getBaseUrl());
