const changeSize = () => {
	fontSize.style.fontSize = `${fontSizeControl.value}px`;
};

const fontSizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

changeSize();

fontSizeControl.addEventListener("input", changeSize);
