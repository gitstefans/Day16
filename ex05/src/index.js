// Only change code below this line
class Microsoft {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  ocupation() {
    return `${this.name} is a philantropist!`;
  }
}
class Facebook extends Microsoft {
  constructor(name, age) {
    super(name);
    this._age = age;
  }
  studentAge() {
    let message = `${this.name} is ${this._age}`;
    return message;
  }
}
let henry = new Microsoft("William Henry Gates III");
henry.ocupation();
console.log(henry.ocupation());
let elliot = new Facebook("Mark Elliot Zuckerberg", 23);
elliot.ocupation();
elliot.studentAge();
console.log(elliot.ocupation());
console.log(elliot.studentAge());
// Only change code above this line
module.exports = {
  Microsoft,
  Facebook,
};
