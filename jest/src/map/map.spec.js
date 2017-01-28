'use strict';

import { expect } from 'chai';
import map from './map';

it('Método map precisa ser uma função', () => {
  expect(map).to.be.a('function');
});

it('Se map([1, 2], (item) => item]) deveria retornar [1, 2]', () => {
  expect(map([1, 2], (item) => item )).to.be.deep.equal([1, 2]);
});

it('Se map([3, 4], (item) => item) deveria retornar [3, 4]', () => {
  expect(map([3, 4], (item) => item )).to.be.deep.equal([3, 4]);
});

it('Se map([1, 2], (item) => item + 1) deveria retornar [2, 3]', () => {
  expect(map([1, 2], (item) => item + 1 )).to.be.deep.equal([2, 3]);
});

it('Se map([4, 6], (item) => item + 1) deveria retornar [5, 7]', () => {
  expect(map([4, 6], (item) => item + 1 )).to.be.deep.equal([5, 7]);
});

it('Se map([1, 2], (item, index) => index) deveria retornar [0, 1]', () => {
  expect(map([1,2], (item, index) => index)).to.be.deep.equal([0, 1]);
});

it('Se map([1, 2], (item, index, array) => array) deveria retornar [[1, 2], [1, 2]]', () => {
  expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]]);
});

it('Se map() deveria retornar array vazio []', () => {
  expect(map()).to.be.deep.equal([]);
});

it('Se map([1, 2]) deveria retornar [1, 2]', () => {
  expect(map([1, 2])).to.be.deep.equal([1, 2]);
});
