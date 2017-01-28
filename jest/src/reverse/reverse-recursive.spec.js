'use strict';

import { expect } from 'chai';
import reverse from './reverse-recursive';

it('reverse deveria ser uma função', () => {
  expect(reverse).to.be.a('function');
})

it('Se reverse([1]) deveria retornar [1]', () => {
  expect(reverse([1])).to.be.deep.equal([1]);
});

it('Se reverse([1, 2]) deveria retornar [2, 1]', () => {
  expect(reverse([1, 2])).to.be.deep.equal([2, 1]);
});

it('Se reverse(["Gabriel", "Ferreira"]) deveria retornar ["Ferreira", "Gabriel"]', () => {
  expect(reverse(["Gabriel", "Ferreira"])).to.be.deep.equal(["Ferreira", "Gabriel"]);
});
