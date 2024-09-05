// Function to find the position of a number in an array
function findNumberPosition(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const numbers = [5, 3, 7, 1, 9, 6];

console.log(findNumberPosition(numbers, 7)); 
console.log(findNumberPosition(numbers, 4));
