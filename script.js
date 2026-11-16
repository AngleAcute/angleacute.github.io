document.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("change", ()=>{
        localStorage.setItem("theme", inp.id);    	
    })
})

if (localStorage.getItem("theme") !== null) {
	document.getElementById(localStorage.getItem("theme")).checked = true	
} else document.getElementById("flashlight").checked = true;