
function playVideo() {
	let video = document.getElementById('video1');
	video.play();
}

function pauseVideo() {
	let video = document.getElementById('video1');
	video.pause();
}

function seekTo(position) {
	let video = document.getElementById('video1');
	video.currentTime = position;
}

function setSpeed(speed) {
	let video = document.getElementById('video1');
	video.playbackRate = speed;
}

window.addEventListener('load', main);

function main() {
	let video = document.getElementById('video1');
	
	video.addEventListener('play',  playEventHappened);
	video.addEventListener('pause', pauseEventHappened);
	video.addEventListener('ended', endedEventHappened);
	
	video.addEventListener('timeupdate', updateProgress);
}

function playEventHappened() {
	let dnevnik = document.getElementById('dnevnik');
	dnevnik.innerText += "Play se dogodio\n";
}

function pauseEventHappened() {
	let dnevnik = document.getElementById('dnevnik');
	dnevnik.innerText += "Pause se dogodio\n";
}

function endedEventHappened() {
	let dnevnik = document.getElementById('dnevnik');
	dnevnik.innerText += "Ended se dogodio\n";
}

function updateProgress() {
	let video = document.getElementById('video1');
	let progress = document.getElementById('progress');
	let procenti = document.getElementById('procenti');
	
	progress.max   = video.duration;
	progress.value = video.currentTime;
	
	let proc = 100 * video.currentTime / video.duration;
	
	procenti.innerText = Math.round(proc, 0) + "%";
}