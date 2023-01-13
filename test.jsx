class Person {
  constructor(ner, nas) {
    this.name = ner;
    this.age = nas;
  }
  //abstraction hiiswerleh
  //incapsulation
  //inheritance
  //polyphorisn

  sda() {
    console.log("Name:", this.name + " " + "Age:", this.age);
  }
}
class Student extends Person {
  constructor(ner, nas, gpa) {
    super(ner, nas);
    this.gpa = gpa;
  }
  //overide
  sda() {
    console.log("Name:", this.name + " Age:", this.age + " gpa:", this.gpa);
  }
}
let p1 = new Person("Naraa", 21);
console.log(p1.name);
console.log(p1.age);
let s1 = new Student("Dulguun", 19, 3);
p1.sda();
s1.sda();
