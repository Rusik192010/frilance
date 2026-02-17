let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let browserSync = require('browser-sync');


gulp.task('scss', function() {
    return gulp.src('Dananz-app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Dananz-app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function () {
    return gulp.src('Dananz-app/**/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function () {
    return gulp.src('Dananz-app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "Dananz-app/"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('Dananz-app/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('Dananz-app/**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.parallel('scss', 'html', 'browser-sync', 'watch'))

