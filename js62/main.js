window.addEventListener('load', main);

function main() {
	let text = document.getElementById('text');
	
	let student = {
		ime: "Lejla",
		prezime: "Curt",
		indeks: "2020123456",
		godina_upisa: 2020
	};
						
	
	
	let jsonStudent = JSON.stringify(student);
	
	text.innerText = jsonStudent;
} 

