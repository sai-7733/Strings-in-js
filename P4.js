function classifyTriangle(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 ||
        side1 + side2 <= side3 ||
        side1 + side3 <= side2 ||
        side2 + side3 <= side1) {
        return "The given sides do not form a valid triangle.";
    }
    if (side1 === side2 && side2 === side3) {
        return "Equilateral Triangle: All sides are equal.";
    }
    if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles Triangle: Two sides are equal.";
    }
    return "Scalene Triangle: All sides are different.";
}
const side1 = 5;
const side2 = 5;
const side3 = 8;

console.log(classifyTriangle(side1, side2, side3));
