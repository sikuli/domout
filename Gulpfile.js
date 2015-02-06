var gulp = require("gulp");
var jasmine = require("gulp-jasmine");

gulp.task("default", function() {
    return gulp.src("spec/streamSpec.js")
        .pipe(jasmine());
});
