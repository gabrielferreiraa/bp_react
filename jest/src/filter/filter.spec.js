'use strict';

import { expect } from 'chai';
import filter from './filter';

it('filter deveria ser uma função', () => {
  expect(filter).to.be.a('function');
});

it('Se filter([1, 2, 3], (item) => item) deveria retornar [1, 2, 3]', () => {
  expect(filter([1, 2, 3], (item) => item)).to.be.deep.equal([1, 2, 3]);
});

it('Se filter([0, 1, 2], (item) => item) deveria retornar [1, 2]', () => {
  expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2]);
});

it('Se filter([1, 2, 3], (item) => item < 2) deveria retornar [1]', () => {
  expect(filter([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1]);
});

it('Se filter([1, 2, 3, 5], (item, index) => item === index + 1) deveria retornar [1, 2, 3]', () => {
  expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3]);
});

it('Se filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item)) deveria retornar [1, 2, 3, 5]', () => {
  const before = filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item));
  expect(before).to.be.deep.equal([1, 2, 3, 5]);
});
