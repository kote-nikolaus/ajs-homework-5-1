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
}
