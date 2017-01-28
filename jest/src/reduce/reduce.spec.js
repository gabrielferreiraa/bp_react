'use strict';

import { expect } from 'chai';
import reduce from './reduce';
import reduceRight from './reduce-right';

it('reduce deveria ser uma função', () => {
  expect(reduce).to.be.a('function');
});

it('Se reduce([1, 2, 3], (acc, item) => acc + item, 0) deveria retornar 6', () => {
  const before = reduce([1, 2, 3], (acc, item) => acc + item, 0);
  const after = 6;
  expect(before).to.be.equal(after);
});

it('Se reduce([2, 3, 4], (acc, item) => acc + item, 0) deveria retornar 9', () => {
  const before = reduce([2, 3, 4], (acc, item) => acc + item, 0);
  const after = 9;
  expect(before).to.be.equal(after);
});

it('Se reduce([2, 3, 4], (acc, item) => acc + item) deveria retornar 9', () => {
  const before = reduce([2, 3, 4], (acc, item) => acc + item);
  const after = 9;
  expect(before).to.be.equal(after);
});

it('Se reduce([1, 2], (acc, item) => {acc["number - " + item] = item; return acc}, {}) deveria retornar {"number - 1": 1, "number - 2": 2}', () => {
  const before = reduce([1, 2], (acc, item) => {
    acc["number - " + item] = item;
    return acc
  }, {});
  const after = {"number - 1": 1, "number - 2": 2};
  expect(before).to.be.deep.equal(after);
});

it('Se reduce([1, 2], (acc, item, index) => acc + index, 0) deveria retornar 1', () => {
  const before = reduce([1, 2], (acc, item, index) => acc + index, 0);
  const after = 1;
  expect(before).to.be.equal(after);
});

it('Se reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) deveria retornar 3', () => {
  const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0);
  const after = 3;
  expect(before).to.be.equal(after);
});

it('Se reduceRight(["leir", "b", "ga"], (acc, item) => acc + item), "") deveria retornar gabriel', () => {
  const before = reduceRight(['riel', 'b', 'ga'], (acc, item) => acc + item, '');
  const after = 'gabriel';
  expect(before).to.be.equal(after);
});
