$(document).ready( function() {

	document.getElementById('#education').style.display = 'block';

	$('.medium .container .nav a').on('click', function(e) {

		var slides = document.getElementsByClassName('slide');

		for (var i = 0; i < slides.length; i++ ) {
			slides[i].style.display = 'none';
		}

		var id = $(this).attr('href');
		document.getElementById(id).style.display = 'block';

	});

});

