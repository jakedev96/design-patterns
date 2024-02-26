interface IEnemy {
  name: string;
  health: number;
  attack: number;
  monsters: string[];
}

class EasyEnemy implements IEnemy {
  name: string = "easy enemies";
  health: number = 35;
  attack: number = 5;
  monsters: string[] = ["rat", "bug", "wasp"];
}

class MediumEnemy implements IEnemy {
  name: string = "medium enemies";
  health: number = 50;
  attack: number = 15;
  monsters: string[] = ["cyclops", "dragon", "slime"];
}

class HardEnemy implements IEnemy {
  name: string = "hard enemies";
  health: number = 75;
  attack: number = 25;
  monsters: string[] = ["behemoth", "demon", "hydra"];
}

class EnemiesFactory {
  createEnemy(playerLevel: number) {
    switch (true) {
      case playerLevel <= 10:
        return new EasyEnemy();
      case playerLevel > 10 && playerLevel <= 20:
        return new MediumEnemy();
      default:
        return new HardEnemy();
    }
  }
}

const factory = new EnemiesFactory();

const player = {
  name: "jaketheman96",
  level: Math.floor(Math.random() * 30) + 1,
};

const enemies = factory.createEnemy(player.level);

console.log(
  `Player ${player.name} level ${player.level} fights against ${
    enemies.name
  }, (${enemies.monsters.join(", ")}).`
);
