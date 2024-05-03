const data = { name: "Olga", age: 32 };
const { name, age } = data;

const dataList = [{ name: "Olga", age: 32 }];
const [item, ...restItems] = dataList;

const word = "Olga";
const [first, ...rest] = word;

const valueOne = word.split(""); // ["O", "l", "g", "a"]
const [first, second, third, ...valueTwo] = word; // ["O", "l", "g", "a"]
