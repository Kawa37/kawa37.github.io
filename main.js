function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function showImage() {
  document.getElementById('secretImg').style.display = 'block';
}
function hideImage() {
  document.getElementById('secretImg').style.display = 'none';
}

let clickCount = 0;


document.getElementById('kawa').addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();

  clickCount ++;

  //if (clickCount ===4){
   // document.getElementById('p').textContent = "Are You Sure";
  //}
  //if (clickCount === 10) {
  //      window.open("https://youtu.be/VQbPmP05qPA?si=Qmx-dPDb6Vv8qQ74", '_blank'); // Replace with your desired URL
  //      clickCount = 0;
  //      document.getElementById('p').textContent = '';
  //}
});

document.getElementById('timeBtn').addEventListener('click', function() {
  window.location.href = 'https://kawa37.github.io/time'; // Navigates to the time page
});

document.getElementById('calcBtn').addEventListener('click', function() {
  window.location.href = 'https://kawa37.github.io/password'; // Navigates to the time page
});
document.getElementById('shanqBtn').addEventListener('click', function() {
  window.location.href = 'https://kawa37.github.io/shanqman'; // Navigates to the time page
});

document.getElementById('clickBtn').addEventListener('click', function() {
  window.location.href = 'https://kawa37.github.io/clicker'; // Navigates to the time page
});


