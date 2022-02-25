// Learn Lodash: Write Your Own Version of Partition, Split an Array in Two

// Write your own version of the lodash _.partition function. Partition receives a "collection", which can be an array or object, and a function that will check each item in the collection, it returns an array containing two arrays, one of the values that passed the check and the other with values that did
// const array = [{item: true}, {item: true}, {item: false}]
// partition(array) ➞ [[{item: true}, {item: true}], [{item: false}]]
// Arguments
// collection (Array|Object): The collection to iterate over.
// [check](Function): The function invoked per iteration.
// Returns
// (Array): Returns the array containing two arrays each holding either those that passed and those that didn't.
// The function passed in can be a regular function, but it can also be what the lodash writers refer to as shorthand. Shorthand means that if a particular value is passed (e.g. a string or an array), the partition function will know to use a lodash helper function. For this challenge, you're permitted to import the helpers mentioned in the examples below.

// Examples