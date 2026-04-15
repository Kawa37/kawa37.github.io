let spacesDisplay = document.getElementById('spaces')
let words = [
    "apple", "banana", "cat", "dog", "house", "car", "tree", "water",
    "fire", "earth", "air", "computer", "phone", "music", "light",
    "dark", "happy", "sad", "fast", "slow", "smart", "strong",
    "run", "walk", "think", "build", "create", "learn", "win", "lose",
    "game", "work", "play", "sleep", "dream", "food", "drink",
    "city", "road", "river", "mountain", "sky", "cloud",
    "rain", "wind"
]

let guessBtn = document.getElementById('guessBtn')

let randomWord = words[Math.floor(Math.random()*words.length)]

let spaces = []
for (let i = 0;i<randomWord.length;i++){
    spaces.push('_')
}

spacesDisplay.textContent = spaces.join(' ')
let tries = 7
document.getElementById('tries').textContent = `Tries: ${tries}`

document.getElementById('guessBtn').addEventListener('click', function() {
    if (guessBtn.textContent === 'Reset'){
        location.reload();
    }

    const usrInput = document.getElementById('input').value.toLowerCase();

    for (let i = 0; i< usrInput.length;i++){
        let letter = usrInput[i]

        if (randomWord.includes(letter)){

            for (let j = 0;j<randomWord.length;j++){
                if (randomWord[j] === letter){
                    spaces[j] = letter;
                }
            }
        }else{
            tries --;
            document.getElementById('tries').textContent = `Tries: ${tries}`
        }
        if (tries <=0){break}
    }
    spacesDisplay.textContent = spaces.join(' ')
    if (!spaces.includes('_')){
        document.body.style.background = '#50C878';
        guessBtn.textContent = 'Reset'
    }
    if (tries <= 0){
        document.body.style.background = '#D10000';
        guessBtn.textContent = 'Reset'
        spacesDisplay.textContent = randomWord.split('').join(' ')
    }
    document.getElementById('input').value = '';
});


document.getElementById("backBtn").addEventListener('click',function (){
    window.location.href = 'https://kawa37.github.io/'
})
