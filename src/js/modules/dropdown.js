dropdown = {
	init: function() {

		var parts = {
			dropdownButton: document.querySelector('#dropdown'),
			dropdownMenu: document.querySelector('.main-nav nav ul')
		};

		return parts;

	},
	toggle: function() {

		var _parts = dropdown.init();

		_parts.dropdownMenu.classList.toggle('collaped-menu');
		_parts.dropdownMenu.classList.toggle('uncollaped-menu');

		_parts.dropdownButton.classList.toggle('cross');
		_parts.dropdownButton.classList.toggle('uncross');

	},
	close: function(parts) {

		var _parts = parts;
		_parts.dropdownMenu.classList.add('collaped-menu');
		_parts.dropdownButton.classList.add('uncross');

	},
	watch: function() {

		var _parts = dropdown.init();
		
		dropdown.close(_parts);
		_parts.dropdownButton.addEventListener('click', dropdown.toggle, false);

	}
};

module.exports = dropdown;