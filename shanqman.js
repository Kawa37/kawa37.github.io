let spacesDisplay = document.getElementById('spaces')
let words = ['bread','joke','hot','elephant','dog','samsung','clock','sugar','pen','ball','mobile','you','rabbit','monkey','donkey','spiderman' ,'iphone','fog','second','house','water','okay','mother',"father",'brother','sister']
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
    }
    spacesDisplay.textContent = spaces.join(' ')
    if (!spaces.includes('_')){
        document.body.style.background = 'green';
        guessBtn.textContent = 'Reset'
    }
    if (tries <= 0){
        document.body.style.background = 'red';
        guessBtn.textContent = 'Reset'
        spacesDisplay.textContent = randomWord.split('').join(' ')
    }
    document.getElementById('input').value = '';
});


