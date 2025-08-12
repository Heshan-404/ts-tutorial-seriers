// There are two ways we can define variables in TS

var varValue: string = "VAR";

let letValue: string = "LET";

// let is local scope but var is functional scope

function func() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  // console.log(i); we can't access i here because its local scope

  for (var a = 0; a < 10; a++) {
    console.log(a);
  }
  console.log(a);

  // then we can define same var variable again with same type if want

  var a = 10;

  console.log(a);
}

let num = 10;
// num = "string" ----> TS2322: Type string is not assignable to type number
