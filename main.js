function getRandomColor() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return as RGB string
  return `rgb(${r}, ${g}, ${b})`;
}

let clickCount = 0;


document.getElementById('b').addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();

  clickCount ++;

  if (clickCount ===4){
    document.getElementById('p').textContent = "Are You Sure";
  }
  if (clickCount === 5) {
        window.open("https://youtu.be/ubFq-wV3Eic?si=YA5pIY8AtTdFtpcQ", '_blank'); // Replace with your desired URL
        clickCount = 0; // Optional: reset counter after opening site
        document.getElementById('p').textContent = '';
  }
});
