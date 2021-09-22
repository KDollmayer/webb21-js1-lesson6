class Wage {
  constructor(day, startTime, endTime, hourlySalary) {
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.hourlySalary = hourlySalary;

    this.maximunHours = 12;
    this.extraHoursCountFrom = 8;
    this.normalSalary = 0;
    this.extraSalary = 0;
    this.weekendSalary = 0;
  }
  getTotalHours() {
    return this.endTime - this.startTime;
  }
  getExtraTimeHours() {
    if (this.getTotalHours() > this.extraHoursCountFrom) {
      return this.getTotalHours() - this.extraHoursCountFrom;
    } else {
      return 0;
    }
  }
  isWeekend() {
    return this.day === "Saturday" || this.day === "Sunday";
  }
  calculateWeekendWage() {
    this.normalSalary = this.getTotalHours() * this.hourlySalary;
    this.weekendSalary = this.normalSalary;
  }
  calculateWeekdayWage() {
    this.normalSalary = this.getTotalHours() * this.hourlySalary;
    this.extraSalary = this.getExtraTimeHours() * this.hourlySalary * 0.5;
  }
  calculateWage() {
    if (this.isWeekend()) {
      this.calculateWeekendWage();
    } else {
      this.calculateWeekdayWage();
    }
    return this.normalSalary + this.extraSalary + this.weekendSalary;
  }
  getMessage() {
    if (this.getTotalHours() > this.maximunHours) {
      return `You may not work more thatn ${
        this.maximunHours
      }, you have worked ${this.getTotalHours()} hours `;
    } else {
      return `Your total salary is ${this.calculateWage()}`;
    }
  }
}
const wage1 = new Wage("monday", 1, 17, 200);
const wage2 = new Wage("Sunday", 8, 17, 200);
console.log(wage1.getMessage());
console.log(wage2.getMessage());
