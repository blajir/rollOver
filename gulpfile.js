const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('hello', function() {
  console.log('Hello gulp!');
});

gulp.task('default', ['hello']);

gulp.task('webserver', function () {
  gulp.src('')
    .pipe(webserver({
      host: 'localhost',
      port: 8080,
      livereload: true,
      open: true
  }));
});
