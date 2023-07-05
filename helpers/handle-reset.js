import { animateCounter } from "./animate-counter.js";

export function handleReset(data, clicksCounter) {
  data.count = 0;
  const targetValue = "00000";
  animateCounter(targetValue, clicksCounter);
}
