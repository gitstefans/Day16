// Only change code below this line
class Person {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  getPerson() {
    let personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
    return personInfo;
  }
}
//let p = new Person("Joe", "Joe@Joe.com", 31);
//console.log(p.getPerson());
module.exports = Person;
// Only change code above this line
