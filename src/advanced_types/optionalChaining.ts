type Customer = {
  birthDay?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthDay: new Date() };
}

let customer = getCustomer(0);

// if (customer !== null && customer !== undefined)
console.log(customer?.birthDay?.getFullYear());
