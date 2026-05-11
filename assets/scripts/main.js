// main.js

window.addEventListener("DOMContentLoaded", init);

function init() {
	let recipes = getRecipesFromStorage();
	addRecipesToDocument(recipes);
	initFormHandler();
}

function getRecipesFromStorage() {
	// A9
	return JSON.parse(localStorage.getItem("recipes")) || [];
}

function addRecipesToDocument(recipes) {
	// A10
	const main = document.querySelector("main");

	// A11
	recipes.forEach((recipe) => {
		const recipeCard = document.createElement("recipe-card");
		recipeCard.data = recipe;
		main.append(recipeCard);
	});
}

function saveRecipesToStorage(recipes) {
	// B1
	localStorage.setItem("recipes", JSON.stringify(recipes));
}

function initFormHandler() {
	// B2
	const form = document.querySelector("form");

	// B3
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		// B4
		const formData = new FormData(form);

		// B5
		const recipeObject = {};
		for (const [key, value] of formData.entries()) {
			recipeObject[key] = value;
		}

		// Convert number fields
		recipeObject.rating = Number(recipeObject.rating);
		recipeObject.numRatings = Number(recipeObject.numRatings);

		// B6
		const recipeCard = document.createElement("recipe-card");

		// B7
		recipeCard.data = recipeObject;

		// B8
		const main = document.querySelector("main");
		main.append(recipeCard);

		// B9
		const recipes = getRecipesFromStorage();
		recipes.push(recipeObject);
		saveRecipesToStorage(recipes);

		form.reset();
	});

	// B10
	const clearButton = document.querySelector("button[type='button']");

	// B11
	clearButton.addEventListener("click", () => {
		// B12
		localStorage.clear();

		// B13
		const main = document.querySelector("main");
		main.innerHTML = "";
	});
}