const gulp = require('gulp');
const runSequence = require('gulp-run-sequence');

const paths = require('../configs/paths');

module.exports = () => {
  gulp.task('release', ['release-build'], () => {
    return gulp.src(`${paths.TMP}**/*.js`)
      .pipe(gulp.dest(paths.DIST));
  });

  gulp.task('release-build', (cb) => {
    runSequence(
      'clean',
      'build',
      ['copy-dist-images', 'copy-dist-html', 'copy-dist-json', 'copy-dist-css'],
      cb
    );
  });

  gulp.task('copy-dist-images', () => {
    return gulp.src(`${paths.SRC}**/*.+(gif|jpg|png|jpeg|tiff)`) // gulp looks for all image files
      .pipe(gulp.dest(paths.DIST));
  });

  gulp.task('copy-dist-html', () => {
    return gulp.src(`${paths.SRC}**/*.html`) // gulp looks for all html files
      .pipe(gulp.dest(paths.DIST));
  });

  gulp.task('copy-dist-json', () => {
    return gulp.src(`${paths.SRC}**/*.json`) // gulp looks for all json files
      .pipe(gulp.dest(paths.DIST));
  });

  gulp.task('copy-dist-css', () => {
    return gulp.src(paths.CSS) // gulp looks for all css files
      .pipe(gulp.dest(paths.DIST));
  });
};
