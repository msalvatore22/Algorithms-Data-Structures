# Big O Notation
* Big O Notation is a way to formalize fuzzy counting
* It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
* We are talking about the upperbound, worst case scenario

## Who Cares?
* It's important to have a precise vocabulary to talk about how our code performs
* Useful for discussing trade-offs between different approaches
* When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
* Comes up in interviews

## What does better mean?
* Faster?
* Less memory-intensive?
* More readable?

## The problem with time
* Different machines record differnt times
* The same machine will record different times
* For fast algorithms, speed measurements may not be precise enough

## If not time, then what?
* Rather than counting seconds
* Let's count the number of operations

## Counting Operations
* O(1): runtime stays constant in proporation of n operations
* O(N): time increases in proporation of n operations
* O(N^2): runtime squares to proporation of n operations

## Space Complexity
* As n grows, we assume the input space grows
* Focusing on what happens inside the algorithm
* Most primitives are constant space
* Strings require O(n) space where n is string length
* Reference types are generally O(n) where n is the length of arrays or the number of keys for objects

## Logarithms
* The inverse of exponents
* The binary logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

