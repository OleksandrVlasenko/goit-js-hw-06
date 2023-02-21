const form = document.querySelector(".login-form");

function checkFilling(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;
	
	if (password.value === "" || email.value === "") {
		alert("Поле Email і Password мають бути заповненні");
		return;
	}
	const newUser = {
		email: email.value,
		password: password.value,
	};
	console.log("Данні користувача", newUser);
	event.currentTarget.reset();
}

form.addEventListener("submit", checkFilling);
