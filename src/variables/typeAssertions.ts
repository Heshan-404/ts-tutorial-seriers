let message: string;

console.log(typeof message); // undefined

message = "MSG";

// message.endsWith("G") we cant get this string functions since it is undefined data type so we need to type assertion

//These type assertions not doing it runtime
let endsWithG = (<string>message).endsWith("G");
let alternativeWay = (message as string).endsWith("G");
