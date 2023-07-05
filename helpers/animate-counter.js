export function animateCounter(targetValue, clicksCounter) {
  clicksCounter.style.opacity = 0;
  setTimeout(() => {
    clicksCounter.textContent = targetValue;
    clicksCounter.style.opacity = 1;
  }, 150);
}
