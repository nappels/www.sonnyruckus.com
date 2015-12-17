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
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var gulpCopy = require('gulp-copy');

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

gulp.task('html', function() {
  gulp.src('./app/index.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
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

gulp.task('imagemin', function() {
  gulp.src('./app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function() {
  gulp.src('./app/fonts/*')
    .pipe(gulpCopy('./dist/', {prefix: 1}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe(clean());
});

gulp.task('default', ['build', 'html', 'fonts', 'imagemin', 'serve', 'sass', 'watch']);

gulp.task('watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});
