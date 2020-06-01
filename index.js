// Add your functions here
function map(array, fn){
  const transform = [];
  array.forEach(item => {
    transform.push(fn(item));
  });
  return transform;
}

function reduce(array, fn, startingPoint){
  let memo = startingPoint;
  for(let i = 0; i < array.length; i++){
    memo = fn(array[i], memo);
  }
  return memo;
}
