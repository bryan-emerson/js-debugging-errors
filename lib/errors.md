# JavaScript Errors and Debugging

Each code snippet below throws an error. Your task is to determine (a) what is
the error message, (b) what is causing the error message and (c) how to resolve or fix the error?

## Errors

### Prompt #1

We want an alert to appear in the browser that says "Hello World". But for some
reason, it's not working ...

```js
alert(greeting);
```

A. What is the error message?
  Uncaught ReferenceError: greeting is not defined
  at script.js:3
B. What is causing the error?
  greeting is not defined
C. How can you resolve/fix the error?

```js
greeting = "Hello World";
alert(greeting);
```

### Prompt #2

We're trying to log the birds with names that are more than 4 characters long.
But for some reason, it's not working ...

```js
let birds = ['Eagle', 'Falcon', 'Duck', 'Turkey']

birds.forEach(function(bird) {
  if (bird.length > 4) {
    console.log(bird)
}
```

A. What is the error message?
  ```js
  SyntaxError: Unexpected end of input

  script.js:10 Uncaught SyntaxError: missing ) after argument list
  ```
B. What is causing the error?
  ```js
  for the first error we need to add a curly bracket at the end and for the second we need to add a parenthases at the end. because the argument was a function
  ```
C. How can you resolve/fix the error?

```js
let birds = ['Eagle', 'Falcon', 'Duck', 'Turkey']

birds.forEach(function(bird) {
  if (bird.length > 4) {
    console.log(bird)
  }
});
```

### Prompt #3

We're trying to concatenate these two strings together. But for some reasons,
it's not working ...

```js
let greeting = "hello";
greeting.push(" world");
console.log(greeting);
```

A. What is the error message?
  ```js
  TypeError: greeting.push is not a function
    at script.js:5
  ```
B. What is causing the error?
  ```js
  greeting.push is not a function
  ```
C. How can you resolve/fix the error?

   ```js
   let greeting = "hello";
   let string2 = " world";
   console.log(greeting.concat(string2));
   ```

### Prompt #4

We're trying to call the `greet` function. But for some reason, it's not working
...

```js
this.greet();
```

**Hint:** What is `this` in the global scope in our browser?

A. What is the error message?
  ```js
    TypeError: this.greet is not a function
  ```
B. What is causing the error?
  ```js
    the function call is being made in the global scope
  ```
C. How can you resolve/fix the error?
```js
  fix this by calling it in a local scope (inside of an object)
```

```js
this.greet();
```

### Prompt #5

We're trying to print Bob's name to the console. But for some reason, it's not
working ...

```js
var bob;
console.log(bob.name);
```

A. What is the error message?
  ```js
    TypeError: Cannot read property 'name' of undefined
    at
  ```

B. What is causing the error?
  ```js
    bob is not an object literal containing a value of "bob" at the key name
  ```
C. How can you resolve/fix the error?

```js
let obj = {
  name: "bob"
};
console.log(obj.name);
```

### Prompt #6

We're trying to print the message to the console. But for some reason, it's not
working...

```js
  let forSale = "sea shells"
  let message = `She "sells' ${forSale} by \`sea' sea shore'
  console.log(message)
```

A. What is the error message?
```js
  SyntaxError: Unexpected end of input
```

B. What is causing the error?
```js
  a missing back tick at the end of message
```

C. How can you resolve/fix the error?

```js
  let forSale = "sea shells"
  let message = `She "sells' ${forSale} by \`sea' sea shore'`
  console.log(message)
```

### Prompt #7

We're trying to print Bob's first name to the console. But for some reason, it's
not working.

```js
const bob = {
  profile: {
    name: {
      firstName: "Bob",
      lastName: "Seger"
    },
    age: 73,
    dateOfBirth: {
      month: "May",
      day: 6,
      year: 1945
    },
    career: "Singer"
  }
};

console.log(bob.name.first_name);
```

A. What is the error message?
```js
  TypeError: Cannot read property 'first_name' of undefined
```

B. What is causing the error?
```js
  the console.log was not called correctly to acces the desired information. adding a profile after bob and correcting the firstName key fix the issue
```

C. How can you resolve/fix the error?

```js
const bob = {
  profile: {
    name: {
      firstName: "Bob",
      lastName: "Seger"
    },
    age: 73,
    dateOfBirth: {
      month: "May",
      day: 6,
      year: 1945
    },
    career: "Singer"
  }
};

console.log(bob.profile.name.firstName);
```

### Prompt #8

We're trying to make it so that when we call the `greet` method of `person`, an
alert appears with the person's full name. But for some reason, it's not working
...

```js
let person = {
  firstName: "Bob",
  lastName: "Seger",
  greet: function() {
    function fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    alert(fullName());
  }
};

person.greet();
```

A. What is the error message?
```js
  instead of greeting with the name it greets with undefined undefined
```
B. What is causing the error?
```js
  this is not able to reach the proper scope from the confines of the function it is in
```

C. How can you resolve/fix the error?

```js
let person = {
  firstName: "Bob",
  lastName: "Seger",
  greet: function() {
    function fullName() {
      return `${person.firstName} ${person.lastName}`;
    }
    console.log(this.firstName)
    alert(fullName());
  }
};

person.greet();
```

### Prompt #9

We're trying to implement the [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number). But for some reason,
it's not working ...

**Note:** The commented out code is part of the prompt. It represents code we've tried to implement to complete the function, and we may or may not need all or some of the commented out code in the final solution.

```js
function createSequence( max ) {
  let sequence = [1, 1]
  // a = 1
  // b = 1

  for (let i = 2; i < max; i++) {
  let a = sequence[i - 1]
  let b = sequence[i - 2]
  sequence.push(a + b)

  // while (i <= max) {
  //    var a = 1, b = 1
  // }
  // }
  return sequence
}

let sequence = createSequence(20)
console.log(sequence)
```

A. What is the error message?
```js
  SyntaxError: Identifier 'sequence' has already been declared
```

B. What is causing the error?
```js
  the closing curly bracket was not in place fior the function createSequence
```

C. How can you resolve/fix the error?

```js
function createSequence( max ) {
  let sequence = [1, 1]
  // a = 1
  // b = 1

  for (let i = 2; i < max; i++) {
  let a = sequence[i - 1]
  let b = sequence[i - 2]
  sequence.push(a + b)

  // while (i <= max) {
  //    var a = 1, b = 1
  // }
  // }
  return sequence
 }
}

let sequence = createSequence(20)
console.log(sequence)
```

### Prompt #10

We're trying to make a working counter object. But for some reason, it's not
working ...

```js
const Counter = {
  total: 0,
}

Counter.increase() {
  this.total++
}

Counter.decrease() {
  this.total--
}

Counter.reset() {
  this.total = 0
}

Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
console.log(Counter.total) // => value = 6
Counter.decrease()
Counter.decrease()
Counter.decrease()
Counter.decrease()
console.log(Counter.total)  // => value = 2
Counter.rest()
console.log(Counter.total) // => value = 0
```

A. What is the error message?
```js
  SyntaxError: Unexpected token '{'
```
B. What is causing the error?
```js
  the methods need to be inside the correct scope
```
C. How can you resolve/fix the error?
```js
  this can be fixed by placing the functions inside the object they reference
```

```js
const Counter = {
  total: 0,
}

Counter.increase() {
  this.total++
}

Counter.decrease() {
  this.total--
}

Counter.reset() {
  this.total = 0
}

Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
console.log(Counter.total) // => value = 6
Counter.decrease()
Counter.decrease()
Counter.decrease()
Counter.decrease()
console.log(Counter.total)  // => value = 2
Counter.rest()
console.log(Counter.total) // => value = 0
```

### Prompt #11

We're trying to print the string `"hello world"`. But for some reason, it's not
working ...

```js
let obj = {
  oompa: [
    {
      loompa: {
        doopati: [
          [
            {
              do: ["good by cruel world", "hello world", "goodnight moon"]
            }
          ]
        ]
      }
    }
  ]
};

let message = obj[0].oompa.loompa[0].doopati.do[2];
console.log(message);
```

A. What is the error message?
```js
  TypeError: Cannot read property 'oompa' of undefined
```

B. What is causing the error?
```js
  the desired data is not being accessed correctly
```
C. How can you resolve/fix the error?

```js
let obj = {
  oompa: [
    {
      loompa: {
        doopati: [
          [
            {
              do: ["good by cruel world", "hello world", "goodnight moon"]
            }
          ]
        ]
      }
    }
  ]
};

let message = obj.oompa[0].loompa.doopati[0][0].do[0];
console.log(message);
```
