export class Student {
  name: string;
  rollNo: number;

  constructor(name: string, roll: number) {
    this.name = name;
    this.rollNo = roll;
  }
  displayName(): string {
    return "Sandeep Chintakindi";
  }

  displayRoll(): number {
    return this.rollNo;
  }
}
var s = new Student("sandeep", 11);
var name = s.displayName();
var roll = s.displayRoll();
console.log(name);
console.log(roll);
