const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

const appHtml = (cb) => {
    return gulp.src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
}

const appCss = (cb) => {
    return gulp.src('app/**/*.css')
        .pipe(uglifycss({ "uglyComments": true })) //Retira os espaços em branco
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css')) //Joga na pasta destino public
}

const appJs = (cb) => {
    return gulp.src('app/**/*.js')
        .pipe(babel({ presets: ['env'] }))  //Coloca na versao do es5
        .pipe(uglify())                     //Pega os arquivos para retirar espaços em brancos/identações coisas do tipo
        .pipe(concat('app.min.js'))         //Juntar tudo em um arquivo só
        .pipe(gulp.dest('public/assets/js'))
}

const appImgs = (cb) => {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('public/assets/imgs'))
}

module.exports = { appHtml, appCss, appJs, appImgs }