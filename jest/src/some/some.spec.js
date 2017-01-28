'use strict';

import { expect } from 'chai';
import some from './some';

it('some deveria ser uma função', () => {
  expect(some).to.be.a('function');
});

it('Se some([], (item) => item) deveria retornar false', () => {
  expect(some([], (item) => item)).to.not.be.ok;
});

it('Se some([1, 2], (item) => item) deveria retornar true', () => {
  expect(some([1, 2], (item) => item)).to.be.ok;
});

it('Se some([1, 2, 3], (item, index) => index % 2 === 0) deveria retornar true', () => {
  expect(some([1, 2, 3], (item, index) => index % 2 === 0)).to.be.ok;
});

it('Se some([1, 3, 5], (item) => item % 2 === 0) deveria retornar false', () => {
  expect(some([1, 3, 5], (item) => item % 2 === 0)).to.not.be.ok;
});

it('Se some([1, 2, 3], (item, index, array) => array.indexOf(2) === 1) deveria retornar true', () => {
  expect(some([1, 2, 3], (item, index, array) => array.indexOf(2) === 1)).to.be.ok;
});
