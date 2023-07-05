import { handleClick } from "./helpers/handle-click.js";
import { handleReset } from "./helpers/handle-reset.js";

const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const clicksCounter = document.getElementById("clicks");

const data = { count: 0 };

clicksCounter.innerHTML = String(data.count).padStart(5, "0");

clickButton.addEventListener("click", () => handleClick(data, clicksCounter));
resetButton.addEventListener("click", () => handleReset(data, clicksCounter));
