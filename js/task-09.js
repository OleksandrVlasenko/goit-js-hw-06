function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const changeColor = () => {
	const color = getRandomHexColor();
	body.style.backgroundColor = color;
	colorOutput.textContent = color;
};

const changeColorButton = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");
const body = document.querySelector("body");

const defaultColor = window
	.getComputedStyle(body)
	.getPropertyValue("background-color")
	.split(/\D/g)
	.filter(elem => elem !== "")
	.map(elem => Number(elem).toString(16))
	.join("");

colorOutput.textContent = `#${defaultColor}`;

changeColorButton.addEventListener("click", changeColor);
