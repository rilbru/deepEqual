'use strict';

// this function checks if val1 is deep equal to val2
function deepEqual(val1, val2) {
    if (val1 === val2) {
        return true;
    }
    else if ((typeof val1 === 'object' && val1 !== null) && (typeof val2 === 'object' && val2 !== null)) {
    // checking if val1 is an array and val2 is not an array 
    if (Array.isArray(val1) !== Array.isArray(val2)){
        return false;
    }
    // if length of properties in objects are not equal then return false
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);
    if (keys1.length !== keys2.length){
        return false;
    }
    // checking with a for in loop if property/value exists in each object
    for (let property in val1) {
        if (val2.hasOwnProperty(property)) {
            if (!deepEqual(val1[property], val2[property])) {
                return false;
            }
        }
        else {
            return false;
        }
     }
     return true;
    }
    else {
        return false;
    }
}        

module.exports = deepEqual;
