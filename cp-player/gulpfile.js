const gulp = require('gulp');
const uglify = require('gulp-uglify');
const obfuscator = require('gulp-javascript-obfuscator');
const rename = require('gulp-rename'); 

// Task to minify and obfuscate JavaScript files
gulp.task('compress-obfuscate', () => {
  return gulp.src('./cp-player.js')  
    .pipe(uglify())               
    .pipe(obfuscator({            
      compact: true,
      controlFlowFlattening: true,  // Makes the control flow more difficult to follow
      deadCodeInjection: true,      // Removes dead code, which adds complexity
      debugProtection: false,        // Protects against debugging tools in some browsers
      stringArrayEncoding: ['base64'] // Encodes string arrays to further obfuscate string literals
    }))
    .pipe(rename({ extname: '.min.js' }))  // Rename output file to have .min.js extension
    .pipe(gulp.dest('dist'));  // Output destination folder
});

// Default task to run when you simply type 'gulp' in the terminal
gulp.task('default', gulp.series('compress-obfuscate'));