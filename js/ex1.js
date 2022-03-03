console.log(" HW 5 ex 1 - Square Class");

// TODO: defining the Square Class properties and methods
let side = 0;
class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
  diag() {
    return Math.sqrt(2 * (this.side * this.side));
  }
}
let nosqrs = prompt("How many squares would you like to make? (up to 3)");
for (i = 1; i <= nosqrs; i++) {

  //creating an object using the "new" syntax and prompting for # of inches for a side of square.
  const mysqr = new Square(
    prompt("How many inches is one side of your square:?")
  );
  // logic for fun word change (only did it for 3 since just for fun)
  switch (i) {
    case (1):
      fun = "1st";
      break;
    case (2):
      fun = "2nd";
      break;
    case (3):
      fun = "3rd";
      break;
    default:
      fun = "xth";
  }
  console.log(
    `Your ${fun} square with one side of ${mysqr.side
    } inches has perimeter of ${mysqr.perimeter()} inches, an area of ${mysqr.area()} inches and a diagonal of ${mysqr
      .diag()
      .toFixed(2)} inches.`
  );
}