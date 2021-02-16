function init() {
	let slozioSe = localStorage.getItem('slozioSe');
	
    if (slozioSe === null) {
	  prikaziCuvanjePodatakaPp();
  }
  
    let boja = localStorage.getItem('boja');
	
	if (boja === null) {
		boja = '#000000';
	}
	
	document.getElementById('bojaTeksta').value = boja;
	
	document.querySelector('body').style.color = boja;  
}

window.addEventListener('load', init);

function prikaziCuvanjePodatakaPp() {
	let d = document.getElementById('cuvanjePodataka');
	d.classList.remove('hidden');
}

function sakrijCuvanjePodatakaPp() {
	let d = document.getElementById('cuvanjePodataka');
	d.classList.add('hidden');
}

function slazemSe() {
	localStorage.setItem('slozioSe', 'true');
	
	sakrijCuvanjePodatakaPp();
}

function neSlazemSe() {
	localStorage.removeItem('slozioSe');
	
	window.location = 'https://www.google.com/';
}


function promijenjenaBoja() {
	let stara = document.querySelector('body').style.color;
	let nova = document.getElementById('bojaTeksta').value;
	
	if (stara == nova) {
		
	}
	
	document.querySelector('body').style.color = nova;
	
	localStorage.setItem('boja', nova);
}

function resetSvega() {
	localStorage.clear();
	
	window.location.reload();
}