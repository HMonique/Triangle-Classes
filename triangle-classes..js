class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

twoSides(a,b,c) {
    if ((a === b && c !== b) || (b === c && a !== c) || (b === c && a !== c))
        return true;
    else return false;
}

isIsoceles() {
    return this.twoSides(this.sideA, this.sideB, this.sideC);
  }
}

const triangle = new Triangle(1,1,2);
console.log(triangle.isIsoceles());
