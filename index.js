var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
	if (resume.basics && resume.basics.profiles.length > 0) {
		for (var i=0; i < resume.basics.profiles.length; i++) {
			resume.basics.profiles[i].class = resume.basics.profiles[i].network.toLowerCase();
		}
	}

	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};
