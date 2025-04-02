// Page Load
var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log('auto play is set to ' + video.autoplay);
	video.loop = false;
	console.log('loop is set to ' + video.loop);
});

// Play Button
let playButton = document.getElementById("play");
playButton.addEventListener("click", function(){
	console.log("video has been clicked to play");
	video.play();

	// Display the volume level onto the page, use ".textContent"
	video.volume = 1;
	let volumeInfo = document.getElementById("volume");
	volumeInfo.textContent = video.volume * 100 + "%";
});

// Pause Button
let pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function(){
	console.log("video has been clicked to pause");
	video.pause();
});

// Slow Down
let slowButton = document.getElementById("slower");
slowButton.addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slow down video")
	console.log("Speed is " + video.playbackRate);
});

// Speed Up
let speedButton = document.getElementById("faster");
speedButton.addEventListener("click", function(){
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed up video")
	console.log("Speed is " + video.playbackRate);
});

// Skip Ahead
let skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function(){
	// If the skip time goes beyond the video length, the video 
	// will go back to current time of 0 or the start of the video
	if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } 
	else {
        video.currentTime = video.currentTime + 10;
    }
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
});

// Mute
let muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function(){
	// To go into Unmute mode
	if (video.muted) {
		console.log("Unmute");
		video.muted = false;
		// need to change the 'unmute' into 'mute'
		muteButton.textContent = "Mute";
	} 
	// To go into Mute mode
	else {
		console.log("Mute");
		video.muted = true;
		// need to change the text 'mute' to 'unmute'
		muteButton.textContent = "Unmute";
	}
});

// Volume Slider
let volumeSlider = document.getElementById("slider");
let volumeInfo = document.getElementById("volume");

volumeSlider.addEventListener("input", function(){
	video.volume = volumeSlider.value / 100;
	// Convert to correct output structure
	volumeInfo.textContent = video.volume * 100 + "%";
	console.log("The current value is " + video.volume);
});

// Styled
let vintageStyle = document.getElementById("vintage");
vintageStyle.addEventListener("click", function(){
	console.log("Applied Old School style");
	video.classList.add("oldSchool");
});

// Original
let originalStyle = document.getElementById('orig');
originalStyle.addEventListener("click", function(){
	console.log("Removed Old School style");
	video.classList.remove("oldSchool");
});