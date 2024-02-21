abstract class CharacterStrategy {
  abstract role(): string;
  abstract weapon(): string;
  abstract skill(): string;
}

class WarriorStrategy extends CharacterStrategy {
  role(): string {
    return "Warrior class";
  }

  weapon(): string {
    return "Sword";
  }

  skill() {
    return "Sword Attack";
  }
}

class MagicianStrategy extends CharacterStrategy {
  role(): string {
    return "Magician Class";
  }

  weapon(): string {
    return "Wand";
  }

  skill(): string {
    return "Fireball";
  }
}

class PriestStrategy extends CharacterStrategy {
  role(): string {
    return "Priest Class";
  }

  weapon(): string {
    return "Book";
  }

  skill() {
    return "Enchantment";
  }
}

class Character extends CharacterStrategy {
  private characterStrategy: CharacterStrategy;

  constructor(characterStrategy: CharacterStrategy) {
    super();
    this.characterStrategy = characterStrategy;
  }

  role(): string {
    return this.characterStrategy.role();
  }

  weapon(): string {
    return this.characterStrategy.weapon();
  }

  skill(): string {
    return this.characterStrategy.skill();
  }
}

const character = new Character(new MagicianStrategy());
console.log(
  `${character.role()} uses ${character.weapon()} and have ${character.skill()}`
);
