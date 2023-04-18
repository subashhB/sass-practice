const { src, dest, watch, series } = require('gulp');
const  sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles(){
    return src('sushi/**/*.scss') // ** Means to lookup to all the sub-folders that may be inside the sushi folder
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']}))
        .pipe(dest('css'))
}

function watchTasks(){
    watch(['sushi/**/*.scss', '*.html'], buildStyles) //Watch the *.html file so that it watches all the changes in the html file and it can add the css class later
}

exports.default = series(buildStyles, watchTasks)