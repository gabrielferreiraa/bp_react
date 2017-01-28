'use strict';

import { expect } from 'chai';
import every from './every';

it('every deveria ser uma função', () => {
  expect(every).to.be.a('function');
});

it('Se every([], (item) => item) deveria retornar true', () => {
  expect(every([])).to.be.ok;
});

it('Se every([0, 2, 3], (item) => item) deveria retornar false', () => {
  expect(every([0, 2, 3], (item) => item)).to.not.be.ok;
});

it('Se every([1, 2, 3], (item) => item) deveria retornar true', () => {
  expect(every([1, 2 ,3], (item) => item)).to.be.ok;
});

it('Se every([1, 2, 3], (item, index) => index === item - 1) deveria retornar true', () => {
  expect(every([1, 2, 3], (item, index) => index === item - 1)).to.be.ok;
});

it('Se every([1, 2, 3], (item, index, array) => array.length === 3) deveria retornar true', () => {
  expect(every([1, 2, 3], (item, index, array) => array.length === 3)).to.be.ok;
});
