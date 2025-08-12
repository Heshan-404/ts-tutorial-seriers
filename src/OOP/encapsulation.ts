class Point {
  //make these private | access modifiers [`public`,`protected`,`private`]
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`X : ${this.x} Y : ${this.y}`);
  }

  distance(secPoint: Point) {
    console.log(`X : ${this.x - secPoint.x} | Y : ${this.y - secPoint.y}`);
  }
}

let pointOne = new Point(10, 20);
let pointTwo = new Point(30, 40);

// we cant change values since private
// pointOne.x = 20

//--------------------------------EASY WAY------------------------------

class EasyPointer {
  constructor(
    private _x: number,
    private _y: number,
  ) {}

  draw() {
    console.log(`X : ${this._x} Y : ${this._y}`);
  }

  //Getters
  getX(): number {
    return this._x;
  }

  //Setters
  setX(newX: number) {
    this._x = newX;
  }

  //Short Getters and setters
  get x(): number {
    return this._x;
  }

  set x(newValue: number) {
    this._x = newValue;
  }
}

let easyPointer = new EasyPointer(10, 20);
easyPointer.draw();
easyPointer.setX(20);

easyPointer.x = 20;

easyPointer.draw();
