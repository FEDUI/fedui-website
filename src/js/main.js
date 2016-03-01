var dropdown = require('./modules/dropdown');
var faces = require('./modules/faces');

var app = {
	launcher: function() {

		dropdown.watch();
		faces.onLoad();

	}
};

app.launcher();