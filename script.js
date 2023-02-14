//Array consisting of Hiragana strings that I'm currently learning.
const hiragana = {a: {hiragana: 'あ'}, e: {hiragana: 'え'}, i: {hiragana: 'い'}, o: {hiragana: 'お'}, u: {hiragana: 'う'},
ka: {hiragana: 'か'}, ke: {hiragana: 'け'}, ki: {hiragana: 'き'}, ko: {hiragana: 'こ'}, ku: {hiragana: 'く'},
sa: {hiragana: 'さ'}, se: {hiragana: 'せ'}, shi: {hiragana: 'し'}, so: {hiragana: 'そ'}, su: {hiragana: 'す'},
ta: {hiragana: 'た'}, te: {hiragana: 'て'}, chi: {hiragana: 'ち'}, to: {hiragana: 'と'}, tsu: {hiragana: 'つ'},
na: {hiragana: 'な'}, ne: {hiragana: 'ね'}, ni: {hiragana: 'に'}, no: {hiragana: 'の'}, nu: {hiragana: 'ぬ'},
za: {hiragana: 'ざ'}, ze: {hiragana: 'ぜ'}, Zji: {hiragana: 'じ'}, zo: {hiragana: 'ぞ'}, Zzu: {hiragana: 'ず'},
da: {hiragana: 'だ'}, de: {hiragana: 'で'}, Dji: {hiragana: 'ぢ'}, do: {hiragana: 'ど'}, Dzu: {hiragana: 'づ'},
ha: {hiragana: 'は'}, he: {hiragana: 'へ'}, hi: {hiragana: 'ひ'}, ho: {hiragana: 'ほ'}, fu: {hiragana: 'ふ'},
ma: {hiragana: 'ま'}, me: {hiragana: 'め'}, mi: {hiragana: 'み'}, mo: {hiragana: 'も'}, mu: {hiragana: 'む'},
ya: {hiragana: 'や'}, yo: {hiragana: 'ゆ'}, yu: {hiragana: 'よ'},
ra: {hiragana: 'ら'}, re: {hiragana: 'れ'}, ri: {hiragana: 'り'}, ro: {hiragana: 'ろ'}, ru: {hiragana: 'る'},
wa: {hiragana: 'わ'}, wo: {hiragana: 'を'}, n: {hiragana: 'ん'},
ba: {hiragana: 'ば'}, be: {hiragana: 'べ'}, bi: {hiragana: 'び'}, bo: {hiragana: 'ぼ'}, bu: {hiragana: 'ぶ'},
pa: {hiragana: 'ぱ'}, pe: {hiragana: 'ぺ'}, pi: {hiragana: 'ぴ'}, po: {hiragana: 'ぽ'}, pu: {hiragana: 'ぴ'},
ga: {hiragana: 'が'}, ge: {hiragana: 'げ'}, gi: {hiragana: 'ぎ'}, go: {hiragana: 'ご'}, gu: {hiragana: 'ぐ'}};

//Array consisting of Hiragana signs that I'm currently learning.
const hiragana_signs = ['あ', 'え', 'い', 'お', 'う', 'か', 'け', 'き', 'こ', 'く',
'さ', 'せ', 'し', 'そ', 'す', 'た', 'て', 'ち', 'と', 'つ', 'な', 'ね',
'に', 'の', 'ぬ', 'ざ', 'ぜ', 'じ', 'ぞ', 'ず', 'だ', 'で', 'ぢ', 'ど', 'づ',
'は', 'へ', 'ひ', 'ほ', 'ふ', 'ま', 'め', 'み', 'も', 'む',
'や', 'ゆ', 'よ', 'ら', 'れ', 'り', 'ろ', 'る', 'わ', 'を', 'ん',
'ば', 'べ', 'び', 'ぼ', 'ぶ', 'ぱ', 'ぺ', 'ぴ', 'ぽ', 'ぷ',
'が', 'げ', 'ぎ', 'ご', 'ぐ'];

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

