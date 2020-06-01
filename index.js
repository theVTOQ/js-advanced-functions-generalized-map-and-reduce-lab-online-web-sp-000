// Add your functions here
function map(array, fn){
  const transform = [];
  array.forEach(item => {
    transform.push(fn(item));
  });
  return transform;
}
