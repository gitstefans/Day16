// Only change code below this line
class Person {
  constructor() {}
  static display() {
    let message = "Static method is invoked from Person class";
    return message;
  }
  show() {
    console.log(Person.display());
  }
}

// Only change code above this line
var message = new Person();
message.show();
//console.log(message.show());
module.exports = Person;
