class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        // Geef een nieuwe instance terug met de gezamelijke waarde van 2 Vec's
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        // Geef een nieuwe instance terug min de gezamelijke waarde van 2 Vec's
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        // Stelling van Pythagoras om achter de a(2) + b(2) te komen (Math.squareRoot)
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

console.log(new Vec(2, 3).plus(new Vec(1, 2)));
// > Vec { x: 3, y: 5 }

console.log(new Vec(2, 3).minus(new Vec(3, 4)));
// > Vec { x: -1, y: -1 }

console.log(new Vec(3, 4).length);
// > 5