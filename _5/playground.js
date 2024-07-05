function concatStrings(str1, str2, str3) {
    return "".concat(str1).concat(str2).concat(str3);
}
console.log(concatStrings("JS", "Sucks", "Ass"));
// If no type is specifically mentioned, any is inferred
var a = "Hello";
var b = 3.14;
var isThisTheBestBookEver = true;
var pets = ["Belle", "Bubbles"];
var what = ["Belle", 42];
// Tuples
// It is possible to interchange 46 and "Frank" here, but the LSP throws an error
var authors = ["Frank", 46];
// Enums
var Food;
(function (Food) {
    Food[Food["Pizza"] = 0] = "Pizza";
    Food[Food["FriedChicken"] = 500] = "FriedChicken";
    Food[Food["IceCream"] = 501] = "IceCream";
})(Food || (Food = {}));
var myFavoriteFood = Food.FriedChicken;
console.log(myFavoriteFood);
