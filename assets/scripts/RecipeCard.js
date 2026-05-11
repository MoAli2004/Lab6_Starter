// RecipeCard.js

class RecipeCard extends HTMLElement {
	constructor() {
		super();

		// A1
		this.attachShadow({ mode: 'open' });

		// A2
		const article = document.createElement('article');

		// A3
		const style = document.createElement('style');

		// A4
		style.textContent = `
			* {
				font-family: sans-serif;
				margin: 0;
				padding: 0;
			}

			article {
				align-items: center;
				border: 1px solid rgb(223, 225, 229);
				border-radius: 8px;
				display: grid;
				grid-template-rows: 118px 56px 14px 18px 15px 36px;
				height: auto;
				row-gap: 5px;
				padding: 0 16px 16px 16px;
				width: 178px;
			}

			div.rating {
				align-items: center;
				column-gap: 5px;
				display: flex;
			}

			div.rating > img {
				height: auto;
				display: inline-block;
				object-fit: scale-down;
				width: 78px;
			}

			article > img {
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				height: 118px;
				object-fit: cover;
				margin-left: -16px;
				width: calc(100% + 32px);
			}

			p.ingredients {
				height: 32px;
				line-height: 16px;
				padding-top: 4px;
				overflow: hidden;
			}

			p.organization,
			p.rating,
			p:not(.ingredients) {
				font-size: 12px;
			}

			p.organization,
			p:not(.ingredients) {
				color: #70757A;
			}

			p.title {
				display: -webkit-box;
				font-size: 16px;
				height: 36px;
				line-height: 18px;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			p.title > a {
				color: black;
				text-decoration: none;
			}
		`;

		// A5
		this.shadowRoot.append(style, article);
	}

	set data(data) {
		if (!data) return;

		// A6
		const article = this.shadowRoot.querySelector('article');

		// A7
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<p class="title">
				<a href="${data.titleLnk}">${data.titleTxt}</a>
			</p>
			<p class="organization">${data.organization}</p>
			<div class="rating">
				<span>${data.rating}</span>
				<img src="./assets/images/icons/5-star.svg" alt="5 stars">
				<span>(${data.numRatings})</span>
			</div>
			<p>${data.lengthTime}</p>
			<p class="ingredients">${data.ingredients}</p>
		`;
	}
}

// A8
customElements.define('recipe-card', RecipeCard);