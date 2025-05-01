function getRandomColor() {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return as RGB string
  return `rgb(${r}, ${g}, ${b})`;
}



document.getElementById('b').addEventListener('click', function() {
  document.body.style.backgroundColor = getRandomColor();
});
