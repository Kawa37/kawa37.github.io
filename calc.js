const al = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alNums = '0123456789';
const alsym = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function main() {
    document.getElementById('b').onclick = function () {
        let lenStr = document.getElementById('len').value;
        let res = document.getElementById('res');
        let stat = document.getElementById('stat');

        res.textContent = '';
        stat.textContent = '';

        if (lenStr === '') {
            stat.textContent = 'Enter the password length.';
            return;
        }

        if (isNaN(lenStr)) {
            stat.textContent = 'Length must be a number.';
            return;
        }

        let len = Number(lenStr);
        if (len <= 0) {
            stat.textContent = 'Length must be greater than 0.';
            return;
        }

        // divide length roughly equally
        let k = Math.floor(len / 3);
        let r = len - 3 * k;

        let letters = k + (r > 0 ? 1 : 0);
        let nums = k + (r > 1 ? 1 : 0);
        let sym = k;

        let result = '';

        for (let i = 0; i < letters; i++) result += randomChar(al);
        for (let i = 0; i < nums; i++) result += randomChar(alNums);
        for (let i = 0; i < sym; i++) result += randomChar(alsym);

        // shuffle
        let shuffled = result.split('').sort(() => Math.random() - 0.5).join('');
        res.textContent = shuffled;
    };
}

main();
