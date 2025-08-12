class Point {
  x: number | undefined;
  y: number | undefined;

  constructor(x?: number, y?: number) {
    if (x && y) {
      this.x = x;
      this.y = y;
    }
  }

  draw() {
    console.log("X : ", this.x, " - Y : ", this.y);
  }

  distance(secPoint: Point) {
    if (this.x && this.y && secPoint.y && secPoint.x)
      console.log(`Distance : ${this.x - secPoint.x} | ${this.y - secPoint.y}`);
  }
}

let pointOne = new Point(10, 20);
let pointTwo = new Point(30, 50);

pointOne.draw();
pointTwo.draw();
pointTwo.distance(pointOne);
