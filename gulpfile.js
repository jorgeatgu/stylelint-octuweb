var gulp = require('gulp');
var stylelint = require('gulp-stylelint');

gulp.task('lint-css', function() {
  return gulp
    .src('src/css/*.css')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task('default', function() {
  gulp.watch('./src/css/*.css', ['lint-css']);
});
