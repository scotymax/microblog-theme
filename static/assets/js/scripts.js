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
function setCookie(name, value, days = 30) {
	//console.log('setCookie function called');
	var maxAge = Math.round(days * 86400);
	var cookieString = 
		name + '=' + (encodeURIComponent(value) || '') +
		'; domain=scotymax.com' +
		'; SameSite=Strict' +
		'; max-age=' + maxAge +
		'; path=/';
	document.cookie = cookieString;
	console.log('Cookie set: ', cookieString);
}
function getCookie(name) {
	//console.log('getCookie function called');
	var nameEquals = name + '=';
	var cookieArray = document.cookie.split(';');
	for (cookie of cookieArray) {
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.slice(1, cookie.length);
		}
		if (cookie.indexOf(nameEquals) == 0)
			return decodeURIComponent(
			cookie.slice(nameEquals.length, cookie.length),
		);
	}
	return null;
}
function toggleLightTheme() {
	// manually add/remove light-theme class from body tag for this view
	bodyElem = document.getElementsByTagName('body')[0];
	bodyElem.classList.toggle('light-theme');
	// if cookie light-theme does not exist, set it
	if ( lightTheme === null) {
		setCookie('light-theme', true, 30);
	} else {
		// if cookie light-theme does exist, set cookie to expire
		document.cookie = "light-theme= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
	}
}
const lightTheme = getCookie('light-theme');
if ( lightTheme != null ) {
	toggleLightTheme();	
}