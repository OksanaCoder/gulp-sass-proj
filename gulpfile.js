var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/sass/*.scss', ['sass']);
});


gulp.task("default", function () {
  gulp.start("sass");
});