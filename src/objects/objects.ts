let employee: {
  id: number;
  name: string;
  age: number;
  eat: (food: string) => void;
} = {
  id: 1,
  name: "Heshan",
  age: 23,
  eat: (food: string) => {
    console.log(food);
  },
};
