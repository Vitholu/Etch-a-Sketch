const grid = document.querySelector('.right-container');
const gridSize = document.querySelectorAll('button');

gridSize.forEach((e) => {
	e.addEventListener('click', (e) => {
		if (e.target.id === 16) {
			return;
		}
	});
});

function setGridSize16() {}

function setGridSize32() {}

function setGridSize64() {}
