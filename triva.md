1.
What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

    - absolute equality operator. if bar == null, this will also return true, since in JS null is represented as an object of {typeTag: value}. add && bar !== null
    - Also if bar is a function, it will return false. If you want it to return true add || (typeof bar === "function)
    - Arrays are technically functions so depending on what you are checking for, you can add && (Array.isArray(bar))

What will the code below output to the console and why?

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

