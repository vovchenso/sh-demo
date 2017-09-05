const gulp = require('gulp');
const path = require('path');
const clean = require('gulp-clean');
const runSequence = require('gulp-run-sequence');
const babel = require('gulp-babel');
const webPackDevServer = require('./utils/WebpackDevServer');
const eslint = require('gulp-eslint');
const csscomb = require('gulp-csscomb');
const stylelint = require('gulp-stylelint');

const defaultConfig = require('../configs/defaultWebpack.config.js');
const paths = require('../configs/paths');
const defaultServerOptions = require('../configs/defaults');

module.exports = (options = {}) => {
  gulp.task('clean', () => {
    return gulp.src([paths.BUILD, paths.TMP, paths.DIST], { read: false })
      .pipe(clean());
  });

  gulp.task('build', () => {
    return gulp.src(paths.JS)
      .pipe(babel())
      .pipe(gulp.dest(paths.TMP));
  });

  gulp.task('dev', [], () => {
    runSequence('clean', 'build', () => {
      webPackDevServer(
        Object.assign({}, defaultServerOptions, options.port && { port: options.port }),
        defaultConfig
      );
    });
  });

  gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**', '!coverage/**', '!tmp/**'])
      .pipe(eslint({ configFile: path.resolve(__dirname, '../configs/.eslint.js') }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(gulp.dest('.'));
  });

  gulp.task('csscomb', () => gulp
    .src(paths.CSS, { base: '.' })
    .pipe(csscomb(path.resolve(__dirname, '../configs/.csscomb.json'), true))
    .pipe(gulp.dest('./'))
  );

  gulp.task('stylelint', () => gulp
    .src(paths.CSS)
    .pipe(stylelint({
      configFile: path.resolve(__dirname, '../configs/.stylelintrc'),
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
  );
};
