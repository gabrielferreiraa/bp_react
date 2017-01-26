const sum = (arr) => {
  if(arr.length === 0)
    return 0

  const[head, ...tail] = arr;
  return arr[0] + sum(tail);
};

console.log(sum([1, 2, 3, 4, 5]));
