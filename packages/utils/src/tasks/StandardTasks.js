const gulp = require('gulp');

const DevTasks = require('./DevTasks');
const ReleaseTasks = require('./ReleaseTasks');

module.exports = (options) => {
  DevTasks(options);
  ReleaseTasks();
  gulp.task('default', ['dev']);
};
