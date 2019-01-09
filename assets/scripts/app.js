function showNavDropdown() {
	var displayed = document.getElementById('artist-dropdown').style.display;
	if (displayed === 'none' || !displayed)
		document.getElementById('artist-dropdown').style.display = 'inherit';
	else document.getElementById('artist-dropdown').style.display = 'none';
}
