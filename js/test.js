function countMatchingElem(list) {
    var counter = {};
    for (let element of list) {
        if (counter[element]) {
            counter[element] += 1;
        } else {
            counter[element] = 1;
        }
    }
    console.log(counter);
}
var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
countMatchingElem(pets);

function elemReduceer(totalItem, listItem) {
    if (Object.keys(totalItem).includes(listItem)) {
        // console.log(totalItem);
        return { ...totalItem, [listItem]: totalItem[listItem] + 1 };
    } else {
        return { ...totalItem, [listItem]: 1 };
    }
}
const uniqPets = pets.reduce(elemReduceer, {});
console.log(uniqPets);

const elem = [1, 2, 3, 4, 5, 6];

const total = elem.reduce((acc, cur) => {
    return acc + cur;
}, 10);
console.log(total);

function reduceElem(list) {
    const counter = list.reduce((acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {});
    console.log(counter);
}

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
reduceElem(pets);

function jsFilter(list) {
    const filteredItems = list.filter(
        (item, index) => list.indexOf(item) === index
    );
    return filteredItems;
}
console.log(jsFilter(pets));
console.log(Array.from(new Set(pets)));

const numbers = [1, 3, 5, 6, 7, 9];

// Find the first odd number in the array
const firstOddNumber = numbers.find((number) => {
    if (number % 2 !== 0) {
        return console.log(number);
    } else if (number % 2 === 0) {
        const filteredItems = pets.filter(
            (item, index) => pets.indexOf(item) === index
        );
        console.log(filteredItems);
    }
});

console.log(firstOddNumber); // Output: 1
