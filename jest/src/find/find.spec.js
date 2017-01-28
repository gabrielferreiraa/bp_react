'use strict';

import { expect } from 'chai';
import find from './find';

it('find deveria ser uma função', () => {
  expect(find).to.be.a('function');
});
