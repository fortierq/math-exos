function affiche_toggle(id) {
    var x = document.getElementById(id);
    if (x.style.display != "block") {
	x.style.display = "block";
    } else {
	x.style.display = "none";
    }
}
