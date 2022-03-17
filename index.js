const randonStr = () => Math.random().toString(36).slice(2);
console.log(">>>>>> randonStr", randonStr());

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(
  ">>>>>> removeDuplicates",
  removeDuplicates([1, 2, 2, 3, 4, 3, 2, 8, 67, 77, 6, 4])
);

const flat = (arr) =>
  arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);
console.log(">>>>>> flat", flat([["elephante"], "cat", ["lion", "tiger"]]));

const removeFalsy = (arr) => arr.filter(Boolean);
console.log(">>>>>> removeFalsy", removeFalsy([0, 1, null, 2, undefined]));

const isEven = (num) => num % 2 === 0;
console.log(">>>>>> isEven", isEven(3));

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(">>>>>> random", random(2, 6));

const average = (...args) => args.reduce((a, b) => a + b, 0) / args.length;
console.log(">>>>>> average", average(1, 2, 3, 8, 9));

const round = (number, decimal) =>
  Number(Math.round(number + "e" + decimal) + "e-" + decimal);
console.log(">>>>>> round", round(1.005, 2));

const diffDays = (date, otherDate) =>
  Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
console.log(
  ">>>>>> diffDays",
  diffDays(new Date("2021-11-3"), new Date("2022-2-1"))
);
