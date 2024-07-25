let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
let letter = 'n';

let containsLetter = [];
let doesNotContainLetter = [];

for (let word of letterSearch) {
    if (word.includes(letter)) {
        containsLetter.push(word);
    } else {
        doesNotContainLetter.push(word);
    }
}

console.log('Contains letter:', containsLetter);
console.log('Does not contain letter:', doesNotContainLetter);
