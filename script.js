//Array consisting of objects for every sign in an alphabet.
const sign_array = [{name: 'a', hiragana: 'あ'}, {name: 'e', hiragana: 'え'}, {name: 'i', hiragana: 'い'}, {name: 'o', hiragana: 'お'}, {name: 'u', hiragana: 'う'},
{name: 'ka', hiragana: 'か'}, {name: 'ke', hiragana: 'け'}, {name: 'ki', hiragana: 'き'}, {name: 'ko', hiragana: 'こ'}, {name: 'ku', hiragana: 'く'},
{name: 'sa', hiragana: 'さ'}, {name: 'se', hiragana: 'せ'}, {name: 'shi', hiragana: 'し'}, {name: 'so', hiragana: 'そ'}, {name: 'su', hiragana: 'す'},
{name: 'ta', hiragana: 'た'}, {name: 'te', hiragana: 'て'}, {name: 'chi', hiragana: 'ち'}, {name: 'to', hiragana: 'と'}, {name: 'tsu', hiragana: 'つ'},
{name: 'na', hiragana: 'な'}, {name: 'ne', hiragana: 'ね'}, {name: 'ni', hiragana: 'に'}, {name: 'no', hiragana: 'の'}, {name: 'nu', hiragana: 'ぬ'},
{name: 'za', hiragana: 'ざ'}, {name: 'ze', hiragana: 'ぜ'}, {name: 'Zji', hiragana: 'じ'}, {name: 'zo', hiragana: 'ぞ'}, {name: 'Zzu', hiragana: 'ず'},
{name: 'da', hiragana: 'だ'}, {name: 'de', hiragana: 'で'}, {name: 'Dji', hiragana: 'ぢ'}, {name: 'do', hiragana: 'ど'}, {name: 'Dzu', hiragana: 'づ'},
{name: 'ha', hiragana: 'は'}, {name: 'he', hiragana: 'へ'}, {name: 'hi', hiragana: 'ひ'}, {name: 'ho', hiragana: 'ほ'}, {name: 'fu', hiragana: 'ふ'},
{name: 'ma', hiragana: 'ま'}, {name: 'me', hiragana: 'め'}, {name: 'mi', hiragana: 'み'}, {name: 'mo', hiragana: 'も'}, {name: 'mu', hiragana: 'む'},
{name: 'ya', hiragana: 'や'}, {name: 'yo', hiragana: 'ゆ'}, {name: 'yu', hiragana: 'よ'},
{name: 'ra', hiragana: 'ら'}, {name: 're', hiragana: 'れ'}, {name: 'ri', hiragana: 'り'}, {name: 'ro', hiragana: 'ろ'}, {name: 'ru', hiragana: 'る'},
{name: 'wa', hiragana: 'わ'}, {name: 'wo', hiragana: 'を'}, {name: 'n', hiragana: 'ん'},
{name: 'ba', hiragana: 'ば'}, {name: 'be', hiragana: 'べ'}, {name: 'bi', hiragana: 'び'}, {name: 'bo', hiragana: 'ぼ'}, {name: 'bu', hiragana: 'ぶ'},
{name: 'pa', hiragana: 'ぱ'}, {name: 'pe', hiragana: 'ぺ'}, {name: 'pi', hiragana: 'ぴ'}, {name: 'po', hiragana: 'ぽ'}, {name: 'pu', hiragana: 'ぴ'},
{name: 'ga', hiragana: 'が'}, {name: 'ge', hiragana: 'げ'}, {name: 'gi', hiragana: 'ぎ'}, {name: 'go', hiragana: 'ご'}, {name: 'gu', hiragana: 'ぐ'}];

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

//Placeholder variable for kana, in case if I want the sign displayed.
let kanaForm = '';

//Event listener for click on the button to generate Hiragana string.
text_button.addEventListener('click', () => {
    //Clear earlier sign.
    clearHiraganaField();

    //Get random value.
    let signNumberValue = getRandomNumber(0, sign_array.length);

    //Assign name to the display field.
    output.textContent = sign_array[signNumberValue]['name'];
    //Assign kana to kanaForm variable, if you will want it displayed.
    kanaForm = sign_array[signNumberValue]['hiragana'];
});

/*Event listener for click on the button to generate Hiragana sign,
based on variable in line 36.*/
hiragana_sign_button.addEventListener('click', () => {
    hiragana_sign.textContent = kanaForm;
});

