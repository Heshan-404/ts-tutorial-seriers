let func = (x: number, y: number) => {
  console.log(x, y);
};
func(10, 20);

//Inline Annotation Functions
let inLineAnnotateFunc = (point: { x: number; y: number }) => {
  console.log(point.x, point.y);
};

inLineAnnotateFunc({ x: 10, y: 20 });

//Use a interface
interface Numbers {
  x: number;
  y: number;
}

let interfaceParamsFunc = (numbers: Numbers) => {
  console.log(numbers.x, numbers.y);
};

interfaceParamsFunc({
  x: 10,
  y: 20,
});

const numbers: Numbers = {
  x: 10,
  y: 20,
};

interfaceParamsFunc(numbers);
