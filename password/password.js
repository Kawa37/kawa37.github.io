const al = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alNums = '0123456789';
const alsym = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function randomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generate(len) {
  let k = Math.floor(len / 3);
  let r = len - 3 * k;
  let letters = k + (r > 0 ? 1 : 0);
  let nums    = k + (r > 1 ? 1 : 0);
  let sym     = k;

  let result = '';
  for (let i = 0; i < letters; i++) result += randomChar(al);
  for (let i = 0; i < nums;    i++) result += randomChar(alNums);
  for (let i = 0; i < sym;     i++) result += randomChar(alsym);

  return result.split('').sort(() => Math.random() - 0.5).join('');
}

// Wrap in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('b');
  const lenIn = document.getElementById('len');
  const res  = document.getElementById('res');
  const stat = document.getElementById('stat');

  btn.onclick = () => {
    stat.textContent = '';
    res.textContent  = '';

    const lenStr = lenIn.value;
    if (!lenStr) {
      stat.textContent = 'Enter the password length.';
      return;
    }
    if (isNaN(lenStr)) {
      stat.textContent = 'Length must be a number.';
      return;
    }

    const len = Number(lenStr);
    if (len <= 0) {
      stat.textContent = 'Length must be > 0.';
      return;
    }

    res.textContent = generate(len);
  };
});

document.getElementById("backBtn").addEventListener('click',function (){
    window.location.href = 'https://kawa37.github.io/'
})

