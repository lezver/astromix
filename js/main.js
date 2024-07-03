import data from "../data/library.json" with { type: "json" };

const main = document.querySelector('main');


(() => {
	const box = document.createElement('div');
	const h1 = document.createElement('h1');
	const ul = document.createElement('ul');

	
	box.classList.add('main__box');
	h1.textContent = data.main.title;

	const renderControl = `
	${data.main.controls.map((item) => `<li><button><img src=${item} alt="icon"/></button></li>`).join('')}
	`;

	box.append(h1, ul);
	main.append(box);

	main.children[0].children[1].innerHTML = renderControl;


})();

(() => {
	const ul = document.createElement("ul");
	ul.classList.add('main__list');

	main.append(ul);

	const renderList = `
	${data.main.list.map((item) => `<li>
		<img src=${item.src} alt="picture"/>
		<h2>${item.title}</h2>
		<p>${item.text}</p>
		</li>`).join('')}
	`;

	main.children[1].innerHTML = renderList;
})();

(() => {
	const p = document.createElement("p");
	p.classList.add("main__text");
	p.textContent = data.main.lorem;
	main.append(p);
})();
