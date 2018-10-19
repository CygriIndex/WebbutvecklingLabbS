class Vector {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  vecAdd(v) {
    return new Vector((this.x + v.x), (this.y + v.y))
  }

  vecDiff(v) {
    return new Vector((this.x - v.x), (this.y - v.y))
  }

  vecLength() {
    return (Math.sqrt((this.x*this.x) + (this.y*this.y)))
  }

}

var vec = new Vector(2,3)
var vec2 = new Vector(5,6)

console.log(vec.vecAdd(vec2));
console.log(vec.vecDiff(vec2));
console.log(vec.vecLength());


console.log(vec.vecAdd(new Vector(3,5).vecAdd(new Vector(7,5))).vecLength())

console.log(new Vector(50,67).vecDiff(new Vector(24,5)));
