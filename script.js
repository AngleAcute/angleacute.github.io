var root = document.querySelector(':root');
let dark = false

document.getElementById("modeButton").addEventListener("click", ()=>{
	if (dark == true) {
		root.style.setProperty('--backgroundColor', '#fff');
		root.style.setProperty('--primaryColor', '#231f20');
		root.style.setProperty('--unfocusedColor', '#444');
		dark = false
	} else {
		root.style.setProperty('--backgroundColor', '#231f20');
		root.style.setProperty('--primaryColor', '#777');
		root.style.setProperty('--unfocusedColor', '#555');
		dark = true
	};
});