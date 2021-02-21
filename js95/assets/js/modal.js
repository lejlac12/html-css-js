function createInputModal(message, defaultValue, callbackConfirm, callbackClose) {
	
	let pageBlur = document.createElement('div');
	pageBlur.classList.add('page-blur');
	
	let modalHolder = document.createElement('div');
	modalHolder.classList.add('modal-holder');
	modalHolder.innerHTML = `<div class="modal-window">
				<div class="modal-message">${ message }</div>
				<div class="modal-content">
					<div class="modal-row">
						<input type="text" id="modal-input" value=${ defaultValue }>
					</div>
					<div class="modal-row">
						<button id="modal-confirm-button">
							Confirm
						</button>
						<button id="modal-close-button">
							Close
						</button>
					</div>
				</div>
			</div>`;
	
	
	let modalInput         = modalHolder.querySelector('#modal-input');
	let modalConfirmButton = modalHolder.querySelector('#modal-confirm-button');
	let modalCloseButton = modalHolder.querySelector('#modal-close-button');
	
	modalConfirmButton.addEventListener('click',() => {
		let value = modalInput.value;
		
		callbackConfirm(value);
		
		pageBlur.remove();
		modalHolder.remove();
	}); 
	
		modalCloseButton.addEventListener('click',() => {
		
		callbackClose();
		
		pageBlur.remove();
		modalHolder.remove();
	}); 
	
	document.querySelector('body').appendChild(pageBlur);
	document.querySelector('body').appendChild(modalHolder);
	
}

function createYesNoModal(message, callback) {
	
	let pageBlur = document.createElement('div');
	pageBlur.classList.add('page-blur');
	
	let modalHolder = document.createElement('div');
	modalHolder.classList.add('modal-holder');
	modalHolder.innerHTML = `<div class="modal-window">
				<div class="modal-message">${ message }</div>
				<div class="modal-content">
					<div class="modal-row">
						<button id="modal-yes-button">
							Yes
						</button>
						<button id="modal-no-button">
							No
						</button>
					</div>
				</div>
			</div>`;
	
	
	
	let modalYesButton = modalHolder.querySelector('#modal-yes-button');
	let modalNoButton = modalHolder.querySelector('#modal-no-button');
	
	modalYesButton.addEventListener('click',() => {
		
		callback(true);
		
		pageBlur.remove();
		modalHolder.remove();
	}); 
	
		modalNoButton.addEventListener('click',() => {
		
		callback(false);
		
		pageBlur.remove();
		modalHolder.remove();
	}); 
	
	document.querySelector('body').appendChild(pageBlur);
	document.querySelector('body').appendChild(modalHolder);
	
}