var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  bower = require('gulp-bower'),
  concat = require('gulp-concat'),
  rubySass = require('gulp-ruby-sass'),
  minifycss = require('gulp-minify-css'),
  notify = require("gulp-notify"),
  mainBowerFiles = require('main-bower-files'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  sourceComments: 'map',

  includePaths: 'bower_components/bootstrap-sass/assets/stylesheets'
}


// Compiling Sass
gulp.task('sass', function () {
      return gulp.src('app/scss/**/*.scss')
        .pipe(sass(sassOptions))
        .on("error", n ot ify.onError(function (error) {
          return "Error: " + error.message;
        }))
      e(autoprefixer({
              browsers: ['last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']

                .pipe(gulp.dest('app/css'))
              ad({
                stream: true
              }));


            Task lp.task('html', function () {
              ulp.src('app/* */*.htm l', ['html'])
                .pipe(reload({
                  stream: true
                }));

            });



            // Javascript Task
            gulp.task('scripts', function () {
                gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
                  .pipe(rename({
                    suffix: '.min'
                  }))
                  .pipe(uglify())
                  .pipe(gulp.dest('app/js'))


              ); // Minify CSS

              gulp.task('minify-css', function () {
                  gulp.src(['app/css/**/*.css'])
                    .pipe(minifycss({
                      keepBreaks: true
                    }))
                    .pipe(gulp.dest('app/css'))


                  ;





                  gulp.task('watch', function () {
                        gulp.watch('app/scss/**/*.scss', ['sass']);
                        gulp.watch('app/**/*.html', ['html']);
                        gulp.watch('app/**/*.js', ['scripts']);
                        // gulp.watch(config.sassPath + '/**/*.scss', ['css']);

                      );

                      ulp.task('browser-sync', function () {
                          browserSync({
                            server: {
                              baseDir: "./app/"
                            }
                          });

                          ;


                          / Default
                          gulp.task('default', ['sass', 'html', 'minify-css', 'scripts', 'browser-sync', 'watch']);