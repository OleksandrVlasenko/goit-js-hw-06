function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const quantityOfBoxes = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const resetButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let startSize = 30;

function createBoxes(amount) {
	const arrayOfDiv = [];
	for (let i = 1; i <= amount; i += 1) {
		const elem = document.createElement("div");
		elem.className = "box";
		elem.style.width = `${startSize}px`;
		elem.style.height = `${startSize}px`;
		elem.style.backgroundColor = getRandomHexColor();
		arrayOfDiv.push(elem);
		startSize += 10;
	}
	return arrayOfDiv;
}

function destroyBoxes() {
	const boxes = document.querySelectorAll(".box");
	boxes.forEach(elem => elem.remove());
	startSize = 30;
}

createButton.addEventListener("click", () => {
	destroyBoxes();
	boxes.append(...createBoxes(quantityOfBoxes.value));
});

resetButton.addEventListener("click", () => {
	destroyBoxes();
	quantityOfBoxes.value = "";
});
