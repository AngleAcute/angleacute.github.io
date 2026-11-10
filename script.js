var root = document.querySelector(':root');

let dark = "x"

if (localStorage.getItem("dark") == "true") {
	dark = true
	root.style.setProperty('--backgroundColor', '#231f20');
	root.style.setProperty('--primaryColor', '#777');
	root.style.setProperty('--unfocusedColor', '#555');
	$(".accountEntry img").each(function(){this.src=this.src.replace("logosDark","logosLight")});
} else {
	dark = false
}

document.getElementById("modeButton").addEventListener("click", ()=>{
	if (dark == true) {
		root.style.setProperty('--backgroundColor', '#fff');
		root.style.setProperty('--primaryColor', '#231f20');
		root.style.setProperty('--unfocusedColor', '#444');
		$(".accountEntry img").each(function(){this.src=this.src.replace("logosLight","logosDark")});
		document.getElementById("accountListLogo").src="../assets/acuteDark.png"
		dark = false
	} else {
		root.style.setProperty('--backgroundColor', '#231f20');
		root.style.setProperty('--primaryColor', '#777');
		root.style.setProperty('--unfocusedColor', '#555');
		$(".accountEntry img").each(function(){this.src=this.src.replace("logosDark","logosLight")});
		document.getElementById("accountListLogo").src="../assets/acuteLight.png"
		dark = true
	};
	localStorage.setItem("dark", dark)
});

