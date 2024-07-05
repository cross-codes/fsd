function concatStrings(str1: String, str2: String, str3: String): string {
  return `${str1}${str2}${str3}`;
}

console.log(concatStrings("JS", "Sucks", "Ass"));

// If no type is specifically mentioned, any is inferred
let a: string = "Hello";
const b: number = 3.14;

const isThisTheBestBookEver: boolean = true;

const pets: string[] = ["Belle", "Bubbles"];
const what: any[] = ["Belle", 42];

// Tuples
// It is possible to interchange 46 and "Frank" here, but the LSP throws an error
const authors: [string, number] = ["Frank", 46];

// Enums
enum Food {
  Pizza,
  FriedChicken = 500,
  IceCream,
}

let myFavoriteFood = Food.FriedChicken;
console.log(myFavoriteFood);

let myMathFunction: (num1: number, num2: number) => string;

function add(n1: number, n2: number): string {
  return "" + n1 + n2;
}

myMathFunction = add;

function multiply(a: number, b: number): number {
  return a * b;
}

let person = {
  firstName: "John",
  lastName: "Sheridan",
  age: 52,
};
