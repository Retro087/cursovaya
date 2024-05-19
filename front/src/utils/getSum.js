export function getSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += +element.price;
  });
  return sum;
}
