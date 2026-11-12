var root = document.querySelector(':root');
var newStyle = root.style.setProperty

const Themes = new Map()

Themes.set("flashlight",[
	{name: "--primaryColor", value: "#231f20"},
	{name: "--unfocusedColor", value: "#444"},
	{name: "--backgroundColor", value: "#fff"},
	{name: "--themeFilter", value: "invert(9%) sepia(8%) saturate(602%) hue-rotate(294deg) brightness(99%) contrast(91%)"}
]);
Themes.set("grayzone",[
	{name: "--primaryColor", value: "#777"},
	{name: "--unfocusedColor", value: "#444"},
	{name: "--backgroundColor", value: "#231f20"},
	{name: "--themeFilter", value: "invert(55%) sepia(0%) saturate(206%) hue-rotate(139deg) brightness(83%) contrast(85%)"}
]);
Themes.set("banks",[
	{name: "--primaryColor", value: "#40ce54"},
	{name: "--unfocusedColor", value: "#f09"},
	{name: "--backgroundColor", value: "#123"},
	{name: "--themeFilter", value: "invert(60%) sepia(99%) saturate(365%) hue-rotate(76deg) brightness(95%) contrast(83%) drop-shadow(0 0 1px #40ce54)"},
]);


function changeTheme(newTheme) {
	Themes.get(newTheme).forEach((property)=>{
		root.style.setProperty(property.name, property.value)
	});
	localStorage.setItem("SavedTheme", newTheme);
}


if (localStorage.getItem("SavedTheme")) {
	changeTheme(localStorage.getItem("SavedTheme"))
}

document.getElementByID("dropdownButton").addEventListener("mouseleave", ()=>{document.getElementByID("dropdownButton").removeAttribute("open")})

document.getElementById("flashlightTheme").addEventListener("click",()=>changeTheme("flashlight"));
document.getElementById("grayzoneTheme").addEventListener("click",()=>changeTheme("grayzone"));
document.getElementById("banksTheme").addEventListener("click",()=>changeTheme("banks"));