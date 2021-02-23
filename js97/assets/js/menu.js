window.addEventListener('load', init); 

function init() {
	let items = document.querySelectorAll('.item');
	
	for (let item of items) {
		item.addEventListener('contextmenu', showItemContextMenu);
	}
	
	window.addEventListener('click', closeContextMenu);
}

function showItemContextMenu(event) {
	closeContextMenu();
}

function closeContextMenu() {
	let menu = document.getElementById('context-menu');
	
	if (menu) {
		menu.remove();
	}
}

function showItemContextMenu(event) {
	event.preventDefault();
	
	closeContextMenu();
	
	if (event.target.dataset.disableMenu == 'true') {
		return;
	}
	
	let menu = document.createElement('div');
	menu.setAttribute('id', 'context-menu');
	menu.style.left = (event.clientX - 2) + 'px';
	menu.style.top = (event.clientY - 2) + 'px';
	
	let deleteAction = document.createElement('div');
	deleteAction.classList.add('action');
	deleteAction.innerText = 'Delete';
	deleteAction.addEventListener('click', () => {
		event.target.remove();
	});
	
	menu.appendChild(deleteAction);
	
	let redAction = document.createElement('div');
	redAction.classList.add('action');
	redAction.innerText = 'Red text';
	redAction.addEventListener('click', () => {
		event.target.style.backgroundColor = 'red';
	});
	
	menu.appendChild(redAction);
	
	let blueAction = document.createElement('div');
	blueAction.classList.add('action');
	blueAction.innerText = 'Blue text';
	blueAction.addEventListener('click', () => {
		event.target.style.backgroundColor = 'blue';
	});
	
	menu.appendChild(blueAction);
	
	let greenAction = document.createElement('div');
	greenAction.classList.add('action');
	greenAction.innerText = 'Green text';
	greenAction.addEventListener('click', () => {
		event.target.style.backgroundColor = 'green';
	});
	
	menu.appendChild(greenAction);
	
	
	
	document.body.appendChild(menu); 
}