const students = [
  { birthYear: 1980, marks: 80 },
  { birthYear: 1979, marks: 60 },
  { birthYear: 1990, marks: 70 },
  { birthYear: 2000, marks: 85 },
  { birthYear: 2010, marks: 62 },
  { birthYear: 1967, marks: 49 },
  { birthYear: 1949, marks: 30 },
  { birthYear: 1996, marks: 83 },
  { birthYear: 2001, marks: 19 },
];

class Student {
  constructor(birthYear, marks, firstName, lastName) {
    this.birthYear = birthYear;
    this.marks = marks;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getAge() {
    return 2021 - this.birthYear;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  changeBirthYear(newbirthYear) {
    this.birthYear = newbirthYear;
  }
}
const student1 = new Student(2001, 19, "Karl", "Dollmayer");
const häst = 0;

console.log(student1.getAge());
console.log(student1.getFullName());
student1.changeBirthYear(1990);
console.log(student1.getAge());
