# Recursion

## What is recursion?
* A process (a function) that calls itself

### Why is it important?
* Its everywhere
* JSON.parse /  JSON.stringify written recursively
* document.getElementById and DOM traversal algorithms
* Object traversal
* Complex data structures and traversals
* Sometimes cleaner alternative to iteration

### How recursive functions work?
* Invoke the same fucntion with a different input until you reach your base case.

### Base Case
* The condition when the recursion ends

## Helper Method Recursion
* Two functions: outer function, inner function that calls itself

## Pure Recursion Tips
* For arrays use methods like slice, the spread operator, and cocat that make copies of arrays so you do not mutate them
* Remember that strings are immutable so you will need to use methods like slice, substr or substring to make copies of strings
* To make copies of objects use Object.assign or the spread operator