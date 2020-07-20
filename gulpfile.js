const gulp = require('gulp');
const compile = require('gulp-postcss');
const maps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const clean = require('gulp-clean-css');

gulp.task('build', () =>
    gulp.src('src/index.css').
        pipe(maps.init()).
          pipe(compile()).
        pipe(maps.write('.')).
        pipe(gulp.dest('dist')).
        pipe(clean()).
        pipe(rename('index.min.css')).
        pipe(gulp.dest('dist')),
);