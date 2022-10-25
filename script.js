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

//Function that clears Hiragana sign image output field.
function clearHiraganaField() {
    hiragana_sign.textContent = '';
}


//Selecting elements and applying them to variables.
const output = document.getElementById('sign-text');
const text_button = document.getElementById('text-button');
const hiragana_sign = document.getElementById('hiragana-sign-image');
const hiragana_sign_button = document.getElementById('hiragana-sign-image-button');

//Placeholder variable for Hiragana sign index, in case if I want the sign displayed.
let randomSignNumberValue = '';

//Event listener for click on the button to generate Hiragana string.
text_button.addEventListener('click', () => {
    clearHiraganaField();
    let randomSign = randomHiraganaGenerator(hiragana);
    output.textContent = randomSign[0];
    randomSignNumberValue = randomSign[1];
});

/*Event listener for click on the button to generate Hiragana sign,
based on variable in line 36.*/
hiragana_sign_button.addEventListener('click', () => {
    hiragana_sign.textContent = hiragana_signs[randomSignNumberValue];
});

