var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var notifier = require('node-notifier');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var normalizeCSS = require('node-normalize-scss');

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  console.log(title)
  notifier.notify({title: title, message: message});
};

var bundler = watchify(browserify({
  entries: ['./app/app.jsx'],
  transform: [[babelify, { presets: ["es2015", "react"] }]],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js/'))
};

bundler.on('update', bundle)

gulp.task('build', function() {
  bundle()
});

gulp.task('serve', function(done) {
  gulp.src('./dist/')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          if(/main.js/.test(filePath)) {
            cb(true)
          } else if(/style.css/.test(filePath)){
            cb(true)
          }
        }
      },
      open: false
    }));
});

gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass({
      includePaths: normalizeCSS.includePaths
    })
    .on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['build', 'serve', 'sass', 'watch']);

gulp.task('watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});