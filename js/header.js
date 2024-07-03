import data from "../data/library.json" with { type: "json" };

const header = document.querySelector('header');

(() => {
  const beta = document.createElement('span');
  beta.textContent = data.header.beta;

	const btn = document.createElement('button');
  const menu = document.createElement('img');
  menu.alt = 'cross';
  menu.src = './img/logo/menu.png';
	btn.type = 'button';
	
	btn.append(menu);

	btn.addEventListener("click", (e) => { 
		if (menu.src.includes('menu')) { 
		document.body.classList.add('is-hidden')
			menu.src = './img/logo/cross.png';
			header.classList.add('active')
			header.children[1].classList.add('active')
			header.children[2].classList.add('active')

		} else {
			menu.src = './img/logo/menu.png';
			document.body.classList.remove('is-hidden')
			header.classList.remove('active')
			header.children[1].classList.remove('active')
			header.children[2].classList.remove('active')
		}
	})

  header.children[0].append(beta, btn);
})();



(() => {
	const renderList = `
	
	<ul>
	${data.header.list.map((item, index) => index === 2 || index === 4 ? `<li>
	<a href="#" >
	${item}
		<img
		srcset="./img/logo/arrow.png 1x, ./img/logo/arrow@2x.png 2x"
		src="./img/logo/arrow.png" alt="arrow"/>
	</a>
	</li>`
		:
		`<li>
	<a href="#" >
	${item}
	</a>
	</li>`).join('')
	}
	</ul>
	`
	
	header.children[1].innerHTML = renderList;
	
})();

(() => {
  const date = document.createElement('span');
  date.className = 'header__date';

  date.innerHTML = `Astomix &copy;  2018 - ${new Date().getFullYear()}`;

  header.append(date);
})();
