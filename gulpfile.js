const { src, dest, watch, series } = require('gulp');
const  sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('sushi/**/*.scss') // ** Means to lookup to all the sub-folders that may be inside the sushi folder
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTasks(){
    watch(['sushi/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTasks)