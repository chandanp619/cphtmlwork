const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');


function compileSass() {
    return gulp.src('assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/styles'));
}


exports.watch = function () {
    gulp.watch('assets/styles/**/*.scss', compileSass);
}