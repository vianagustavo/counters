import { animateCounter } from "./animate-counter.js";

export function handleClick(data, clicksCounter) {
  data.count++;
  const targetValue = String(data.count).padStart(5, "0");
  animateCounter(targetValue, clicksCounter);
}
