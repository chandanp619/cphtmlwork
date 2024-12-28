// Import required modules
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const obfuscator = require('gulp-javascript-obfuscator');
const rename = require('gulp-rename');  // Optional: To rename output files with .min.js

// Task to minify and obfuscate JavaScript files
gulp.task('compress-obfuscate', () => {
  return gulp.src('./*.js')  // Source directory (replace with your actual JS path)
    .pipe(uglify())               // Minify (uglify) the JS files
    .pipe(obfuscator({            // Obfuscate the minified code
      compact: true,
      controlFlowFlattening: true,  // Makes the control flow more difficult to follow
      deadCodeInjection: true,      // Removes dead code, which adds complexity
      debugProtection: true,        // Protects against debugging tools in some browsers
      stringArrayEncoding: ['base64'] // Encodes string arrays to further obfuscate string literals
    }))
    .pipe(rename({ extname: '.min.js' }))  // Rename output file to have .min.js extension
    .pipe(gulp.dest('dist'));  // Output destination folder
});

// Default task to run when you simply type 'gulp' in the terminal
gulp.task('default', gulp.series('compress-obfuscate'));
