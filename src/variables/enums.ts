//enums

enum Color {
  Black, // this will become 0
  Red, // this will become 1
  Green, // this will become 2
}

// For better optimization we can put const
const enum Size {
  Small = "SM",
  Medium = "M",
  Large = "L",
}

console.log(Size.Large);
