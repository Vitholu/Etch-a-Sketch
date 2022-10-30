const grid = document.querySelector('.right-container');
const gridSize = document.querySelectorAll('button');
const emptyArrayCheck = [];

gridSize.forEach((e) => {
	e.addEventListener('click', (e) => {
		if (e.target.id === '16') {
			return setGridSize16(16);
		}
		if (e.target.id === '32') {
			return setGridSize32(32);
		}
		if (e.target.id === '64') {
			return setGridSize64(64);
		}
		if (e.target.id === 'Clear') {
			return clearFunction();
		}
	});
});

function setGridSize16(size) {
	const sizeGrid = size * size;
	if (emptyArrayCheck.length !== 0) {
		while (grid.firstChild) {
			grid.removeChild(grid.firstChild);
			emptyArrayCheck.pop();
		}
	}
	for (let i = 1; i <= sizeGrid; i++) {
		emptyArrayCheck.push(i);
		const squareDiv = document.createElement('div');
		squareDiv.id = 'g16';
		squareDiv.classList = 'square' + i;
		grid.appendChild(squareDiv);
		// Mouse Event
		squareDiv.onmouseenter = function (e) {
			console.log(e.target);
			e.target.style.cssText = 'background-color: black;';
		};
	}
}

function setGridSize32(size) {
	const sizeGrid = size * size;
	if (emptyArrayCheck.length !== 0) {
		while (grid.firstChild) {
			grid.removeChild(grid.firstChild);
			emptyArrayCheck.pop();
		}
	}
	for (let i = 1; i <= sizeGrid; i++) {
		emptyArrayCheck.push(i);
		const squareDiv = document.createElement('div');
		squareDiv.id = 'g32';
		squareDiv.classList = 'square' + i;
		grid.appendChild(squareDiv);
		// Mouse Event
		squareDiv.onmouseenter = function (e) {
			console.log(e.target);
			e.target.style.cssText = 'background-color: black;';
		};
	}
}

function setGridSize64(size) {
	const sizeGrid = size * size;
	if (emptyArrayCheck.length !== 0) {
		while (grid.firstChild) {
			grid.removeChild(grid.firstChild);
			emptyArrayCheck.pop();
		}
	}
	for (let i = 1; i <= sizeGrid; i++) {
		emptyArrayCheck.push(i);
		const squareDiv = document.createElement('div');
		squareDiv.id = 'g64';
		squareDiv.classList = 'square' + i;
		grid.appendChild(squareDiv);
		// Mouse Event
		squareDiv.onmouseenter = function (e) {
			console.log(e.target);
			e.target.style.cssText = 'background-color: black;';
		};
	}
}

function clearFunction() {
	if (emptyArrayCheck.length !== 0) {
		while (grid.firstChild) {
			grid.removeChild(grid.firstChild);
			emptyArrayCheck.pop();
		}
	}
}
