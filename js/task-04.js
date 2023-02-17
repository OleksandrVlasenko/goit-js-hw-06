const buttonDown = document.querySelector('[data-action="decrement"]');
const buttonUp = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

buttonUp.addEventListener("click", () => {
	counterValue += 1;
	counter.textContent = counterValue;
});

buttonDown.addEventListener("click", () => {
	counterValue -= 1;
	counter.textContent = counterValue;
});

const resetButton = document.createElement("button");
resetButton.type = "button";
resetButton.textContent = "Reset";
resetButton.style.display = "block";
resetButton.style.marginTop = "10px";

buttonUp.after(resetButton);

resetButton.addEventListener("click", () => {
	counterValue = 0;
	counter.textContent = counterValue;
});
