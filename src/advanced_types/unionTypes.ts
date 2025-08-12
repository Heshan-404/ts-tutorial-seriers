function KgToG(weight: number | string): number {
  if (typeof weight === "number") return weight * 1000;
  else return parseInt(weight) * 1000;
}

console.log(KgToG(20));
console.log(KgToG("20Kg"));
