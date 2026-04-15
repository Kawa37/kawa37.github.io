const clickBtn = document.getElementById('clickBtn');
const timerEl = document.getElementById("timer");
const reset = document.getElementById('resetBtn')
const count = document.getElementById('count')
const scoreEl = document.getElementById('score')


function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
clickBtn.addEventListener('click',function(){

    let count = document.getElementById('count').textContent
    document.body.style.background = getRandomColor()

    document.getElementById('count').textContent = Number(count) +1
});

document.getElementById("backBtn").addEventListener('click',function (){
    window.location.href = 'https://kawa37.github.io/'
})

resetBtn.addEventListener('click', function(){
    location.reload()
});

function calcscore(){
    let score = Number(count.textContent)*7;
    scoreEl.textContent = `Score: ${score}`
}

let time = 15; // seconds

const interval = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timerEl.textContent = 
    `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

  time--;

  if (time < 0) {
    clearInterval(interval);
    document.body.style.background = 'red'
    clickBtn.disabled = true;
    calcscore ()
  }
}, 1000);
