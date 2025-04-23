Array.prototype.customFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]; // Return the first element that satisfies the condition
        }
    }
    return undefined; // Return undefined if no element satisfies the condition
};

// Example usage
let studentsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isTen(item, index, array) {
    console.log(`Checking item at index ${index}:`, item);
    return item === 10;
}

const result = studentsArray.customFind(isTen);
console.log("Found element:", result);

// array filter 
// array maps 
// find 
// reduce