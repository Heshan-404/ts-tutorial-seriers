type Employee = {
  name: string;
  age: number;
  eat: (food: string) => string;
};

let employee: Employee = {
  name: "Heshan",
  age: 23,
  eat: (food) => {
    return food;
  },
};

console.log(employee.eat("BUN"));
