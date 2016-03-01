var faces = {
	init: function() {

		var us = document.querySelectorAll('.us');

		return us;

	},
	fadeIn: function() {

		var face = faces.init();
		var erik = face[0];
		var martijn = face[1];

		erik.classList.remove('slide-left');
		martijn.classList.remove('slide-right');

	},
	fadeOut: function() {

		var face = faces.init();
		var erik = face[0];
		var martijn = face[1];

		erik.classList.add('slide-left');
		martijn.classList.add('slide-right');

	},
	onScroll: function() {

		document.onscroll = function() {
			var header = document.querySelector('#welcome');
			var headerHeight = header.offsetHeight;
			var scroll = header.scrollTop;

			if ( scroll > 50 ) {
				
				faces.fadeIn();

			}
			if ( scroll < 50 ) {

				faces.fadeOut();			

			}

		};

	},
	onLoad: function() {

		var face = faces.init();
		var erik = face[0];
		var martijn = face[1];

		window.onload = function() {

			setTimeout( function(){

				erik.classList.add('slide-left');
				martijn.classList.add('slide-right');

			}, 300);

		};

		faces.onScroll();

	}
};

module.exports = faces;