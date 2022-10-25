//Array consisting of hiragana strings I'm currently learning.
const hiragana = ['a', 'e', 'i', 'o', 'u', 'ka', 'ke', 'ki', 'ko', 'ku',
'sa', 'se', 'shi', 'so', 'su', 'ta', 'te', 'chi', 'to','tsu'];

//Function that returns a randomly generated number from 0 to hiragana.length.
function getRandomNumber(arr) {
    min = Math.ceil(0);
    max = Math.floor(hiragana.length-1);
    return Math.floor(Math.random() * (max - min + 1) + min);

};

//Function that returns randomly generated Hiragana string.
function randomHiraganaGenerator(hiragana) {
    let randomSign = '';
    let number = getRandomNumber(hiragana);
    randomSign = hiragana[number];
    return [randomSign, number];
};


//Selecting elements and applying them to variables.
const output = document.getElementById('sign-text');
const text_button = document.getElementById('text-button');
const test = document.getElementById('test');


//Event listener on the button.
text_button.addEventListener('click', () => {
    //let randomSign = randomHiraganaGenerator(hiragana);
    let testingResults = randomHiraganaGenerator(hiragana);
    output.textContent = testingResults[0];
    test.textContent = testingResults[1];
});




