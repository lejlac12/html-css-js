window.addEventListener('load', main);

function main() {
	fetch('http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/news-sample.json')
	   .then(res => res.json())
	   .then(data => {
		   if (data.error !==0) {
			   document.getElementById('left').innerHTML = 'Doslo je do greske.Pokusajte ponovo.';
		   } else {
			 generisiListuVijesti(data.items);  
		   }
	   })
	   .catch(error => {
		   document.getElementById('left').innerHTML = 'Doslo je do greske';
	   
	   });
}

function generisiListuVijesti(lista) {
	document.getElementById('left').innerHTML = '';
	
	for (let vijest of lista) {
		vijestDiv = document.createElement('div');
		
		let vijestThumb = document.createElement('img');
		vijestThumb.setAttribute('src', vijest.thumb);
		vijestThumb.setAttribute('alt', vijest.title);
		vijestDiv.appendChild(vijestThumb);
		
		let vijestTitle = document.createElement('span');
		vijestTitle.innerHTML = vijest.title;
		vijestDiv.appendChild(vijestTitle);
		
		vijestDiv.classList.add('vijest');
		
		vijestDiv.addEventListener('click', () => {
			 document.getElementById('title').innerHTML = vijest.title;
			 document.getElementById('content').innerHTML = vijest.content;
		});
		
		document.getElementById('left').appendChild(vijestDiv);
		

		}
}