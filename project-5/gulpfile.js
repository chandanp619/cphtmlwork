const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./assets/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });
    gulp.watch('./assets/style.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('sass', style);
gulp.task('watch', watch);