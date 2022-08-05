console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a global variable named `basket` and set it to an empty array.
let basket = [];
// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;

console.log('Does basket exist, expect empty', basket);
console.log('Should be 5', maxItems);

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
function addItem(cont, item) {
    if (isFull(cont) === false) {
        cont.push(item);
        return true
    } else {
        return false;
    }
};
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(cont) {
    for (let item of cont) {
        console.log(item);
    }
};
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
function empty(cont) {
    cont.splice(0, cont.length);
    console.log('in empty, should zero arr', cont)
    console.log('basket in empty', basket);
};
// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull(cont) {
    if (cont.length < maxItems) {
        return false;
    } else {
        return true
    }
};

function removeItem(cont, item){
    let remIndex = cont.indexOf(item);
    if (remIndex === -1) {
        return 'null';
    } else {
        return cont.splice(remIndex, 1)
    }
};



//TESTS

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem(basket, 'apples'));
console.log(`Basket is now ${basket}`);
empty(basket);
console.log(`Expect empty: Basket is ${basket}`);
console.log('Adding item, should return true', addItem(basket, 'pear'));
console.log("false =", isFull(basket));
console.log('Adding item, should return true', addItem(basket, 'watermelon'));
console.log("false =", isFull(basket));
console.log('Adding item, should return true', addItem(basket, 'banana'));
console.log('false =', isFull(basket));
console.log('Adding item, should return true', addItem(basket, 'peach'));
console.log("false =", isFull(basket));
console.log('Adding item, should return true', addItem(basket, 'milk'));
console.log('true =', isFull(basket));
console.log('Adding item, should return false', addItem(basket, 'bread'));
console.log('true =', isFull(basket));
console.log(`basket = ${basket}`);
console.log(`removed item = ${removeItem(basket, 'pear')}`);
console.log(`removed item = ${removeItem(basket, 'goat')}`);
console.log(`basket = ${basket}`);
console.log('should list out items below');
listItems(basket);