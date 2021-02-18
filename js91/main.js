function podignutTaster() {
	let adresa = document.getElementById('adresa').value;
	
	localStorage.setItem('adresaKorisnika', adresa);
}

function ucitajAdresu() {
	let adresa = localStorage.getItem('adresaKorisnika');
	
	if (adresa === null) {
		adresa='';
	}
	
	document.getElementById('adresa').value = adresa;
}
function init() {
	ucitajAdresu();
}

function promjenaUSkladistu(event) {
	if ( event.key =='adresaKorisnika') {
		ucitajAdresu();
	}
}
window.addEventListener('load', ucitajAdresu);
window.addEventListener('storage', promjenaUSkladistu);
