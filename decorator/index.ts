abstract class Dog {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    return "walk";
  }

  run() {
    return "run";
  }

  getName() {
    return this.name;
  }
}

class Husky extends Dog {
  constructor(name: string) {
    super(name);
  }

  pullSled() {
    return "pull sled";
  }
}

class Greyhound extends Dog {
  constructor(name: string) {
    super(name);
  }

  runUltraFast() {
    return "run ultra fast";
  }
}

class Golden extends Dog {
  constructor(name: string) {
    super(name);
  }

  huntUnderwater() {
    return "hunt underwater";
  }
}

const dog = new Greyhound("Jake");
console.log(`${dog.getName()} can ${dog.runUltraFast()}`);
