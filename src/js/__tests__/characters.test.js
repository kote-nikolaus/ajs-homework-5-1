import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('should create new Bowman', () => {
  const received = new Bowman('Игорь');

  const expected = {
    name: 'Игорь',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('should create new Swordsman', () => {
  const received = new Swordsman('Катя');

  const expected = {
    name: 'Катя',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('should create new Magician', () => {
  const received = new Magician('Алина');

  const expected = {
    name: 'Алина',
    health: 100,
    level: 1,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('should create new Daemon', () => {
  const received = new Daemon('Петр95');

  const expected = {
    name: 'Петр95',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('should create new Undead', () => {
  const received = new Undead('Kitty');

  const expected = {
    name: 'Kitty',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('should create new Zombie', () => {
  const received = new Zombie('Ромашка');

  const expected = {
    name: 'Ромашка',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('should throw name error 1', () => {
  expect(() => {
    Swordsman('Иннокентий1997');
  }).toThrow();
});

test('should throw name error 2', () => {
  expect(() => {
    Daemon('X');
  }).toThrow();
});

test('should increase level', () => {
  const received = new Zombie('Ромашка');
  received.levelUp();

  const expected = {
    name: 'Ромашка',
    health: 100,
    level: 2,
    type: 'Zombie',
    attack: 48,
    defence: 12,
  };

  expect(received).toEqual(expected);
});

test('should increase health and level', () => {
  const received = new Daemon('Петр95');
  received.health = 47;
  received.level = 3;
  received.attack = 55;
  received.defence = 92;

  received.levelUp();

  const expected = {
    name: 'Петр95',
    health: 100,
    level: 4,
    type: 'Daemon',
    attack: 66,
    defence: 100,
  };

  expect(received).toEqual(expected);
});

test('should not increase level', () => {
  const received = new Undead('Kitty');
  received.health = 0;
  expect(() => {
    received.levelUp();
  }).toThrow();
});

test('should count damage', () => {
  const input = new Magician('Алина');
  input.damage(5);
  const received = input.health;
  const expected = 97;

  expect(received).toBe(expected);
});

test('should count damage and then throw an error', () => {
  const input = new Swordsman('Катя');
  input.health = 7;
  const received = input.damage(5);
  expect(() => {
    received.damage(4);
  }).toThrow();
});

test('should not count damage', () => {
  const received = new Magician('Алина');
  received.health = 0;
  expect(() => {
    received.damage(3);
  }).toThrow();
});
