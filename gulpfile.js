var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rjs = require('requirejs'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css');

//default task
gulp.task('default', ['server', 'watchJS', 'watchCSS', 'watchHTML', 'moveIMG', 'scripts']);



//watchJS
gulp.task('watchJS', function () {
    gulp.watch(['src/js/scripts/*.js', 'src/js/*.js', 'src/js/viewModels/**/*.js'], ['jshint', 'scripts']);
});

//conenct server
gulp.task('server', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

//jshint task
gulp.task('jshint', function () {
    return gulp.src(['src/js/scripts/*.js', 'src/js/*.js', 'src/js/viewModels/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

//watchCSS
gulp.task('watchCSS', function () {
    gulp.watch(['src/css/*.css'], ['minifyCSS']);
});

//minify CSS
gulp.task('minifyCSS', function () {
    return gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

//watchHTML
gulp.task('watchHTML', function () {
    gulp.watch(['src/*.html', 'src/templates/**/*.html'], ['moveHTML']);
});

//moveHTML
gulp.task('moveHTML', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
    gulp.src('src/templates/*.html')
        .pipe(gulp.dest('dist/templates'))
        .pipe(connect.reload());
    gulp.src('src/templates/sa/*.html')
        .pipe(gulp.dest('dist/templates/sa'))
        .pipe(connect.reload());
});

//watchIMG
gulp.task('watchIMG', function () {
    gulp.watch(['src/images/*.*'], ['moveIMG']);
});

//moveHTML
gulp.task('moveIMG', function () {
    return gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload());
})

//r.js requireJS optimize
gulp.task('scripts', function () {
    rjs.optimize({
        baseUrl: 'src/js',
        paths: {
            jquery: 'lib/jquery',
            knockout: 'lib/knockout-3.3.0',
            komapping: 'lib/knockout.mapping',
            Materialize: 'empty:',
            app: 'app',
            hammerjs: 'empty:',
            jquerymock: 'lib/jquery.mockjax.min',
            jqueryHammer: 'lib/jquery.hammer',
            pager: 'lib/pager.min',
            kovalidation: 'lib/knockout.validation.min',
            component: 'scripts/jquery.components',
            dropdown: 'lib/Materialize/dropdown',
            //            viewmodels
            application: 'viewModels/application',
            topics: 'viewModels/topics',
            manageApp: 'viewModels/sa/manage.application',
            //            materialize deps
            sideNav: 'lib/Materialize/sideNav',
            velocity: 'lib/Materialize/velocity.min',
            jqueryEasing: 'lib/Materialize/jquery.easing.1.3',
            materialBox: 'lib/Materialize/materialbox',
            MaterializeDeps: 'lib/Materialize.deps'
        },
        wrapShim: true,
        name: 'main',
        include: ["application", "topics", "manageApp", "MaterializeDeps"],
        out: 'dist/js/main-built.js',
        optimize: 'none'

    }, function (buildResponse) {
        console.log('Optimizing scripts');
        console.log(buildResponse);
    }, function (err) {
        console.log(err);
    })
    connect.reload();

});