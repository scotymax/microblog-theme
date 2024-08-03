function toggleNav(sectionId) {
	menu = document.querySelector('.nav');
	menu.classList.toggle('open');
	if (sectionId) {
		scrollToSection(sectionId);
	}
}
function scrollToSection(sectionId) {
	if (sectionId) {
		document.getElementById(sectionId).scrollIntoView({
			behavior: 'smooth'
		});
	}
}