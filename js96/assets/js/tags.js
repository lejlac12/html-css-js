function createTagInput(root) {
	root.classList.add('tags');
	
	let list = document.createElement('div');
	list.classList.add('list');
	root.appendChild(list);
	
	let input = document.createElement('input');
	root.appendChild(input);
	
	root.addEventListener('click', function() {
		input.focus();
		
	});
	input.addEventListener('keyup', function() {
		let text = input.value.trim();
		
	
		
		if (text.endsWith(',')) {
			
			let udm1 = text.length - 1;
			let baseText = text.substring(0, udm1);
			
			let tag = document.createElement('span');
			tag.classList.add('tag');
			tag.dataset.text = baseText;
			tag.innerText = baseText;
			
			let x = document.createElement('button');
			x.innerText = 'x';
			x.addEventListener('click', function() {
				tag.remove();
				
			});
			
			tag.appendChild(x); 
			
			list.appendChild(tag);
			
			input.value = '';
		}
		
	});
	
	input.addEventListener('keydown', function(event) {
		if (event.key !== 'Backspace') {
			return;
		}
		
		if (input.value.trim().length > 0){ 
			return;
		}
		
		if (list.children.length == 0) {
			return;
		}
		
		list.children[list.children.length-1].remove();
		
	});
	
	root.getTags = function() {
		let tagovi = [];
		
		for (let tagElement of list.children) {
			tagovi.push(tagElement.dataset.text);
		}
		
		return tagovi;
	};
	
	root.clear = function() {
		list.innerText = '';
		input.value = '';
	};
}

 