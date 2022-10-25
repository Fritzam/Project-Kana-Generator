//Array consisting of Hiragana strings that I'm currently learning.
const hiragana = ['a', 'e', 'i', 'o', 'u', 'ka', 'ke', 'ki', 'ko', 'ku',
'sa', 'se', 'shi', 'so', 'su', 'ta', 'te', 'chi', 'to','tsu',
'na', 'ne', 'ni', 'no', 'nu'];

//Array consisting of Hiragana signs that I'm currently learning.
const hiragana_signs = ['あ', 'え', 'い', 'お', 'う', 'か', 'け', 'き', 'こ', 'く',
'さ', 'せ', 'し', 'そ', 'す', 'た', 'て', 'ち', 'と', 'つ', 'な', 'ね',
'に', 'の', 'ぬ'];

//Function that returns a randomly generated number from 0 to hiragana.length.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//Function that returns randomly generated Hiragana string.
function randomHiraganaGenerator(hiragana) {
    let randomSign = '';
    let number = getRandomNumber(0, hiragana.length - 1);
    while (number === -1) {
        number = getRandomNumber(0, hiragana.length - 1);
        }
    randomSign = hiragana[number];
    return [randomSign, number];
};


//Selecting elements and applying them to variables.
const output = document.getElementById('sign-text');
const text_button = document.getElementById('text-button');
const test = document.getElementById('test');


//Event listener on click on the button.
text_button.addEventListener('click', () => {
    //let randomSign = randomHiraganaGenerator(hiragana);
    let testingResults = randomHiraganaGenerator(hiragana);
    output.textContent = testingResults[0];
    test.textContent = testingResults[1];
});




