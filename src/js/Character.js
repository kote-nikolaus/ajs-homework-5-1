export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно состоять минимум из 2 букв, максимум — из 10 букв');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      if (this.defence > 100) {
        this.defence = 100;
      }
      this.health = 100;
    } else {
      throw new Error('Невозможно повысить уровень: персонаж уже умер');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж уже умер');
    }
  }
}
