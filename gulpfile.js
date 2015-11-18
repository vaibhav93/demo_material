var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rjs = require('requirejs'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

//default task
gulp.task('default', ['watchJS','watchCSS','scripts']);

//jshint task
gulp.task('jshint', function () {
    return gulp.src(['src/js/scripts/*.js', 'src/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

//watchJS
gulp.task('watchJS', function () {
    gulp.watch(['src/js/scripts/*.js', 'src/js/*.js'], ['jshint']);
})

//watchCSS
gulp.task('watchCSS', function () {
    gulp.watch(['src/css/*.css'], ['minifyCSS']);
})

//minify CSS
gulp.task('minifyCSS',function(){
    return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css'));
});

//r.js requireJS optimize
gulp.task('scripts', function () {
    rjs.optimize({
        baseUrl: 'src/js',
        paths: {
            jquery: 'lib/jquery',
            knockout: 'lib/knockout-3.3.0',
            Materialize: 'empty:',
            app: 'app',
            //hammerjs: 'lib/hammerjs',
            jqueryHammer: 'lib/jquery.hammer',
            pager: 'lib/pager.min',
            component: 'scripts/jquery.components'
        },
        name: 'main',
        out: 'dist/js/main-built.js',
        optimize: 'none'

    }, function (buildResponse) {
        console.log('Optimizing scripts');
        console.log(buildResponse);
    }, function (err) {
        console.log(err);
    })
});