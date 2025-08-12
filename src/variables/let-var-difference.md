# Difference between `let` and `var`

## What is Hoisting?

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase. This means you can use variables and functions before they are actually declared in your code.

However, only the _declaration_ is hoisted, not the _initialization_. For `var` variables, they are initialized with `undefined` when hoisted. For `let` and `const`, they are hoisted but not initialized, leading to a "Temporal Dead Zone" (TDZ) where accessing them before declaration causes an error.

```javascript
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
// let hoistedLet = "I am also hoisted";
```

## `var`

- **Scope**: `var` is **function-scoped**. This means it's only accessible within the function where it's declared. If declared outside a function, it's global.
- **Hoisting**: `var` declarations are hoisted to the top of their function or global scope. They are initialized with `undefined`.
- **Re-declaration**: You can re-declare the same `var` variable multiple times in the same scope without an error.

```javascript
function exampleVar() {
  console.log(x); // undefined (hoisted, but not yet assigned)
  var x = 10;
  console.log(x); // 10
  var x = 20; // No error, re-declaration is allowed
  console.log(x); // 20

  if (true) {
    var y = 30; // 'y' is function-scoped, not block-scoped
  }
  console.log(y); // 30 (accessible outside the if block)
}
exampleVar();
```

## `let`

- **Scope**: `let` is **block-scoped**. This means it's only accessible within the specific block of code (e.g., `if` statement, `for` loop, or any `{}` curly braces) where it's declared.
- **Hoisting**: `let` declarations are hoisted, but they are not initialized. Accessing a `let` variable before its declaration results in a `ReferenceError` (Temporal Dead Zone).
- **Re-declaration**: You **cannot** re-declare a `let` variable in the same scope. This will cause a `SyntaxError`.

```javascript
function exampleLet() {
  // console.log(a); // ReferenceError: Cannot access 'a' before initialization (TDZ)
  let a = 10;
  console.log(a); // 10
  // let a = 20; // SyntaxError: Identifier 'a' has already been declared

  if (true) {
    let b = 30; // 'b' is block-scoped
    console.log(b); // 30
  }
  // console.log(b); // ReferenceError: b is not defined (not accessible outside the if block)
}
exampleLet();
```

## Key Differences Summarized

| Feature            | `var`                                 | `let`                                    |
| :----------------- | :------------------------------------ | :--------------------------------------- |
| **Scope**          | Function-scoped                       | Block-scoped                             |
| **Hoisting**       | Hoisted, initialized with `undefined` | Hoisted, but in Temporal Dead Zone (TDZ) |
| **Re-declaration** | Allowed                               | Not allowed                              |
| **Best Practice**  | Generally avoided in modern JS        | Preferred for variable declarations      |
