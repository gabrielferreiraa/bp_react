'use strict';

const map = (arr = [], func = (item) => item) => {
  if(!Array.isArray(arr)){
    throw new TypeError('O primeiro parametro deve ser um array');
  }

  if(typeof func !== 'function'){
    throw new TypeError('O segundo parâmetro deve ser uma função');
  }

  let newArr = [];

  for(let i = 0; i < arr.length; i++)
    newArr.push(func(arr[i], i, arr));

  return newArr;
};

export default map;
