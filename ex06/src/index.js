// Only change code below this line
const firstName = (firstName) => {
  return firstName.toUpperCase();
};
const lastName = (lastName) => {
  return lastName.toLowerCase();
};

// Only change code above this line
console.log(firstName("henry"));
console.log(lastName("JoE"));
exports.firstName = firstName;
exports.lastName = lastName;
