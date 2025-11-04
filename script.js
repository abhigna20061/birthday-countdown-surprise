const btn = document.querySelector('.btn');
const story = document.querySelector('.story');

btn.addEventListener('click', () => {
  story.style.display = 'block';

  let duration = 60 * 1000; // 1 minute in ms
  let startTime = Date.now();

  let interval = setInterval(() => {
    if (Date.now() - startTime > duration) {
      clearInterval(interval);
      return;
    }
    createHeart();
  }, 100); // every 0.1 sec a heart spawns
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '🤍';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's'; // random fall speed
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
