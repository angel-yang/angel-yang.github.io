/*
 Angel Yang
 script.js
 07.06.2015
 */

$(document).ready(function() {

	document.getElementById('#home').style.display = 'block';

	$('.page .nav a').on('click', function(e) {
		
		var tabs = document.getElementsByClassName('tab');

		for (var i = 0; i < tabs.length; i++ ) {
			tabs[i].style.display = 'none';
		}

		var id = $(this).attr('href');
		document.getElementById(id).style.display = 'block';

	});
});