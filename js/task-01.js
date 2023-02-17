const categories = document.querySelector("#categories");
console.log("Number of categories: ", categories.children.length);

const categoriesItems = categories.querySelectorAll(".item");

categoriesItems.forEach(item => {
	console.log("Category: ", item.firstElementChild.textContent);
	console.log("Elements: ", item.lastElementChild.children.length);
});
