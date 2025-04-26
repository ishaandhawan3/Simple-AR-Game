let score = 0;

// Function to handle box click
function onBoxClick() {
  score += 1;
  alert(`Box clicked! Your score is now: ${score}`);
  const box = document.getElementById('target-box');
  box.setAttribute('material', 'color', getRandomColor());
}

// Helper function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listener to the box
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('target-box');
  box.addEventListener('click', onBoxClick);
});