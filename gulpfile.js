const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./src/md-file-icons.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', gulp.series(['sass']));

gulp.task('watch', () => {
    gulp.watch('./src/md-file-icons.scss', (done) => {
        gulp.series(['sass'])(done);
    });
});
