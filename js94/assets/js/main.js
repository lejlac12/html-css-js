function hidePopup() {
	let popup = document.getElementById('gallery-preview');
	popup.classList.remove('visible');
}

function init() {
	galleryItems();
	bindKeyDown();
}

function galleryItems() {
	let images = document.querySelectorAll('.gallery a');
	
	let index = 0;
	for (let image of images) {
		image.addEventListener('click', showImage);
		image.dataset.index = index;
		index++;
	}
}

function showImage(event) {
	event.preventDefault();
	
	let link = event.target.parentElement.href;
	let index = event.target.parentElement.dataset.index;
	
	let image = document.querySelector('#gallery-preview img');
	
	image.src = link;
	
	let popup = document.getElementById('gallery-preview');
	popup.dataset.currentIndex = index;
	
	popup.classList.add('visible');
}

function bindKeyDown() {
	window.addEventListener('keydown', keyDownHandler);
}

function keyDownHandler(event) {
	switch (event.key) {
		case "Escape":
			hidePopup();
			break;
		case "ArrowRight":
			showNextImage();
			break;
			
		case "ArrowLeft":
			showPreviousImage();
			break;
	}
}

function showNextImage() {
	let popup = document.getElementById('gallery-preview');
	let currentIndex = popup.dataset.currentIndex;
	
	currentIndex++;
	
	let images = document.querySelectorAll('.gallery a');
	
	currentIndex = currentIndex % images.length;
	
	let link = images[currentIndex].href;
	let image = document.querySelector('img')
	
	image.src = link;
	
	popup.dataset.currentIndex = currentIndex;
	
	popup.classList.add('visible');
}

function showPreviousImage() {
	let popup = document.getElementById('gallery-preview');
	let currentIndex = popup.dataset.currentIndex;
	
	let images = document.querySelectorAll('.gallery a');
	
	currentIndex--;

	if (currentIndex < 0) {
		currentIndex = images.length - 1;
	}
	
	let link = images[currentIndex].href;
	let image = document.querySelector('img')
		image.src = link;
		
		popup.dataset.currentIndex = currentIndex;
	
	    popup.classList.add('visible');
	
}

window.addEventListener('load', init);