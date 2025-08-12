let numbersArray = [1, 2, 3, 4];

let anyArray = [];
anyArray[0] = 2;
anyArray[1] = "a";

let implicitNumArray: number[] = [];
// implicitNumArray[0] = 'a' can't do this since it's a number array
implicitNumArray[0] = 10;

implicitNumArray.push(200);

//loop through an array
implicitNumArray.map((number) => {
  console.log(number);
});

//remove last in item
implicitNumArray.pop();

implicitNumArray[3] = 100;

console.log(implicitNumArray.at(3));
