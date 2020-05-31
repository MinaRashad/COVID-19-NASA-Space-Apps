let current_img = 'air';
document.getElementById('nav-bar').onmouseover = function (evt) {
	document.getElementById('img-' + current_img).className = 'hidden';
	document.getElementById('img-' + evt.target.id).className = '';
	current_img = evt.target.id;
};