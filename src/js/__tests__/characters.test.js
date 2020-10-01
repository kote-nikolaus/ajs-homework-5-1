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

test('should throw error 1', () => {
  expect(() => {
    Swordsman('Иннокентий1997');
  }).toThrow();
});

test('should throw error 2', () => {
  expect(() => {
    Daemon('X');
  }).toThrow();
});
