'use strict';

import { expect } from 'chai';
import find from './find-recursive';

it('find deveria ser uma função', () => {
  expect(find).to.be.a('function');
});

it('Se find([1, 2, 3], (item) => item === 1) deveria retornar 1', () => {
  expect(find([1, 2, 3], (item) => item === 1)).to.be.equal(1);
});

it('Se find([1, 2, 3], (item) => item === 3) deveria retornar 3', () => {
  expect(find([1, 2, 3], (item) => item === 3)).to.be.equal(3);
});

it('Se find([1, 2, 3], (item, index) => index === 1) deveria retornar 2', () => {
  expect(find([1, 2, 3], (item, index) => index === 1)).to.be.equal(2);
});

it('Se find([1, 2, 3], (item, index, array) => array[index] === 2) deveria retornar 2', () => {
  const before = find([1, 2, 3], (item, index, array) => array[index] === 2);
  const after = 2;
  expect(before).to.be.equal(after);
});

it('Se find([], (item) => item) deveria retornar undefined', () => {
  expect(find([], (item) => item)).to.be.equal(undefined);
});
