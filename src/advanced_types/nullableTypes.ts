function printString(str: string | null | undefined) {
  if (str) console.log(str);
  else console.log("Hello");
}

printString("Wellcome");
printString(null);

printString(undefined);
