var root = document.querySelector(':root');

const Themes = {
	flashlight: [
		{name: "--primaryColor", value: "#231f20"},
		{name: "--unfocusedColor", value: "#444"},
		{name: "--backgroundColor", value: "#fff"},
		/*{name: "icons", value: "filter: invert(9%) sepia(8%) saturate(602%) hue-rotate(294deg) brightness(99%) contrast(91%);"*/
	],

	twilight: [
		{name: "--primaryColor", value: "#777"},
		{name: "--unfocusedColor", value: "#444"},
		{name: "--backgroundColor", value: "#231f20"},
		/*{name: "icons", value: "filter: invert(55%) sepia(0%) saturate(206%) hue-rotate(139deg) brightness(83%) contrast(85%);"*/
	],

	ThomasBenjaminBanks: [
		{name: "--primaryColor", value: "#40ce54"},
		{name: "--unfocusedColor", value: "#f09"},
		{name: "--backgroundColor", value: "#123"},
		/*{name: "icons", value: "filter: invert(55%) sepia(0%) saturate(146%) hue-rotate(139deg) brightness(53%) contrast(35%);"*/
	]
}

// document.getElementById("modeButton").addEventListener("click", ()=>{
// 	document.getElementById("dropdown").style.display = 'flex'
// });

document.getElementById("modeButton").addEventListener("mouseenter", ()=>{
	document.getElementById("dropdown").style.display = 'flex'
});
document.getElementById("modeButton").addEventListener("mouseleave", ()=>{
	document.getElementById("dropdown").style.display = 'none'
});

// root.style.setProperty('--backgroundColor', '#231f20');
// root.style.setProperty('--primaryColor', '#777');
// root.style.setProperty('--unfocusedColor', '#555');

// $(".accountEntry img").each(function(){this.src=this.src.replace("logosLight","logosDark")});
// loc.endsWith("social.html") || loc.endsWith("game.html")

// localStorage.getItem("dark")

// document.getElementById("modeButton").addEventListener("click", ()=>{})


