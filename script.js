class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call Rectangle constructor with equal width and height
  }

  getPerimeter() {
    return this.width * 4;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
