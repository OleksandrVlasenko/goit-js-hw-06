const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(
	...ingredients.map(ingredient => {
		const elem = document.createElement("li");
		elem.className = "item";
		elem.textContent = ingredient;
		return elem;
	}),
);
