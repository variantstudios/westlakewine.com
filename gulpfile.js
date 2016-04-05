'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    sass            = require('gulp-sass'),
    compass         = require('gulp-compass'),
    minifyCSS       = require('gulp-minify-css'),
    prefix          = require('gulp-autoprefixer'),
    cp              = require('child_process'),
    uglify          = require('gulp-uglify'),
    plumber         = require('gulp-plumber'),
    gzip            = require('gulp-gzip');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
             .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['compass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from assets/css into both _site/assets/css (for live injecting) and site (for future jekyll builds)
 */


gulp.task('sass-deploy', function () {
    gulp.src('assets/css/**/*.scss')
        .pipe(sass({
            includePaths: ['assets/css'],
        }))
   .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
   .pipe(sass({outputStyle: 'compressed'}))
   .pipe(gulp.dest('assets/css'))
   .pipe(gulp.dest('_site/assets/css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/sass/**', ['compass']);
    gulp.watch('assets/js/dev/**.js', ['scripts']);
    gulp.watch(['_config.yml', '_posts/**', '_events/**', '_specials/**', 'news/**', '_wines/**', 'pages/**', 'index.html', '_layouts/**.html', '_includes/**.html', '_data/**', 'all-events.json'], ['jekyll-rebuild']);
});

// Compile Compass/sass

gulp.task('compass', function() {
  gulp.src('assets/sass/**.scss')
    .pipe(plumber())
    .pipe(compass({
      css: 'assets/css',
      sass: 'assets/sass',
      image: 'assets/images',
      sourceMap: false,
      require: ['breakpoint','singularitygs','toolkit']
    }))
    //.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(prefix({browsers: ['last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('_site/assets/css'));
});


// JS Script Tasks

gulp.task('scripts', function() {
    gulp.src('assets/js/dev/**.js')
    .pipe(plumber())
    .pipe(uglify())
    //.pipe(gzip())
    .pipe(gulp.dest('assets/js/prod/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('_site/assets/js/prod/'));
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('deploy', ['jekyll-build', 'sass-deploy']);
