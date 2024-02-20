import { array } from "../mock";

export class Iterator<T> {
  private index = 0;
  private collection: T[];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  stopIteration() {
    this.index = this.collection.length;
  }
}

const iter = new Iterator(array);

while (iter.hasNext()) {
  const user = iter.next();
  console.log(user);

  if (user.name === "Jake") {
    iter.stopIteration();
  }
}
