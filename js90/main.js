function init() {
	ucitaj();
}

window.addEventListener('load', init);

function sacuvaj() {
	let text = document.getElementById('text').value;
	sessionStorage.setItem('text', text);
}

function ucitaj() {
	let text = sessionStorage.getItem('text');
	
	if (text === null) {
		text = '- - -';
	}
	
	document.getElementById('text').value = text;
	
}