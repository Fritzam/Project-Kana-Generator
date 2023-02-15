//Array consisting of objects for every sign in an alphabet.
const sign_array = [
{name: 'a', hiragana: 'あ', katakana: "ア"},
{name: 'e', hiragana: 'え', katakana: "エ"},
{name: 'i', hiragana: 'い', katakana: "イ"},
{name: 'o', hiragana: 'お', katakana: "オ"},
{name: 'u', hiragana: 'う', katakana: "ウ"},
{name: 'ka', hiragana: 'か', katakana: "カ"},
{name: 'ke', hiragana: 'け', katakana: "ケ"},
{name: 'ki', hiragana: 'き', katakana: "キ"},
{name: 'ko', hiragana: 'こ', katakana: "コ"},
{name: 'ku', hiragana: 'く', katakana: "ク"},
{name: 'sa', hiragana: 'さ', katakana: "サ"},
{name: 'se', hiragana: 'せ', katakana: "セ"},
{name: 'shi', hiragana: 'し', katakana: "シ"},
{name: 'so', hiragana: 'そ', katakana: "ソ"},
{name: 'su', hiragana: 'す', katakana: "ス"},
{name: 'ta', hiragana: 'た', katakana: "タ"},
{name: 'te', hiragana: 'て', katakana: "テ"},
{name: 'chi', hiragana: 'ち', katakana: "チ"},
{name: 'to', hiragana: 'と', katakana: "ト"},
{name: 'tsu', hiragana: 'つ', katakana: "ツ"},
{name: 'na', hiragana: 'な', katakana: "ナ"},
{name: 'ne', hiragana: 'ね', katakana: "ネ"},
{name: 'ni', hiragana: 'に', katakana: "ニ"},
{name: 'no', hiragana: 'の', katakana: "ノ"},
{name: 'nu', hiragana: 'ぬ', katakana: "ヌ"},
{name: 'za', hiragana: 'ざ', katakana: "ザ"},
{name: 'ze', hiragana: 'ぜ', katakana: "ゼ"},
{name: 'Zji', hiragana: 'じ', katakana: "ジ"},
{name: 'zo', hiragana: 'ぞ', katakana: "ゾ"},
{name: 'Zzu', hiragana: 'ず', katakana: "ズ"},
{name: 'da', hiragana: 'だ', katakana: ""},
{name: "De", hiragana: 'で', katakana: 'デ'},
{name: 'Dji', hiragana: 'ぢ', katakana: "ヂ"},
{name: 'do', hiragana: 'ど', katakana: "ド"},
{name: 'Dzu', hiragana: 'づ', katakana: "ヅ"},
{name: 'ha', hiragana: 'は', katakana: "ハ"},
{name: 'he', hiragana: 'へ', katakana: "ヘ"},
{name: 'hi', hiragana: 'ひ', katakana: "ヒ"},
{name: 'ho', hiragana: 'ほ', katakana: "ホ"},
{name: 'fu', hiragana: 'ふ', katakana: "フ"},
{name: 'ma', hiragana: 'ま', katakana: "マ"},
{name: 'me', hiragana: 'め', katakana: "メ"},
{name: 'mi', hiragana: 'み', katakana: "ミ"},
{name: 'mo', hiragana: 'も', katakana: "モ"},
{name: 'mu', hiragana: 'む', katakana: "ム"},
{name: 'ya', hiragana: 'や', katakana: "ヤ"},
{name: 'yo', hiragana: 'ゆ', katakana: "ヨ"},
{name: 'yu', hiragana: 'よ', katakana: "ユ"},
{name: 'ra', hiragana: 'ら', katakana: "ラ"},
{name: 're', hiragana: 'れ', katakana: "レ"},
{name: 'ri', hiragana: 'り', katakana: "リ"},
{name: 'ro', hiragana: 'ろ', katakana: "ロ"},
{name: 'ru', hiragana: 'る', katakana: "ル"},
{name: 'wa', hiragana: 'わ', katakana: "ワ"},
{name: 'wo', hiragana: 'を', katakana: "ヲ"},
{name: 'n', hiragana: 'ん', katakana: "ン"},
{name: 'ba', hiragana: 'ば', katakana: "バ"},
{name: 'be', hiragana: 'べ', katakana: "ベ"},
{name: 'bi', hiragana: 'び', katakana: "ビ"},
{name: 'bo', hiragana: 'ぼ', katakana: "ボ"},
{name: 'bu', hiragana: 'ぶ', katakana: "ブ"},
{name: 'pa', hiragana: 'ぱ', katakana: "パ"},
{name: 'pe', hiragana: 'ぺ', katakana: "ペ"},
{name: 'pi', hiragana: 'ぴ', katakana: "ピ"},
{name: 'po', hiragana: 'ぽ', katakana: "ポ"},
{name: 'pu', hiragana: 'ぴ', katakana: "プ"},
{name: 'ga', hiragana: 'が', katakana: "ガ"},
{name: 'ge', hiragana: 'げ', katakana: "ゲ"},
{name: 'gi', hiragana: 'ぎ', katakana: "ギ"},
{name: 'go', hiragana: 'ご', katakana: "ゴ"},
{name: 'gu', hiragana: 'ぐ', katakana: "グ"}];

//Function that returns a randomly generated number from 0 to length of a sign array.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    //Get random number.
    let number = Math.floor(Math.random() * (max - min + 1) + min);

    //If number === -1 roll again until it's not. I'm not sure why it happens, so I had to do a workaround.
    while (number === -1) {
        number = Math.floor(Math.random() * (max - min + 1) + min);
    }

    return number;
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
const hiragana_field = document.getElementById('hiragana');
const katakana_field = document.getElementById('katakana');

//Placeholder variable for kana, in case if I want the sign displayed.
let kanaForm = '';

//Selection for either katakana or hiragana. Default is hiragana.
let selection = true;

hiragana_field.addEventListener('click', () => {
    hiragana_field.style.background = "#ba9c45";
    katakana_field.style.background = "#c0c0c0";
    clearHiraganaField();
    output.textContent = '';
    selection = true;
})  

katakana_field.addEventListener('click', () => {
    katakana_field.style.background = "#ba9c45";
    hiragana_field.style.background = "#c0c0c0";
    clearHiraganaField();
    output.textContent = '';
    selection = false;
})  

//Event listener for click on the button to generate Hiragana string.
text_button.addEventListener('click', () => {
    //Clear earlier sign.
    clearHiraganaField();

    //Get random value.
    let signNumberValue = getRandomNumber(0, sign_array.length);

    //Assign name to the display field.
    output.textContent = sign_array[signNumberValue]['name'];
    //Assign kana to kanaForm variable, if you will want it displayed.
    if (selection === true) {
        kanaForm = sign_array[signNumberValue]['hiragana'];
    } else if (selection === false) {
        kanaForm = sign_array[signNumberValue]['katakana'];
    }
});

/*Event listener that displays kana if required.*/
hiragana_sign_button.addEventListener('click', () => {
    hiragana_sign.textContent = kanaForm;
});

