const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const { appHtml, appCss, appJs, appImgs } = require('../gulpTasks/app')


//Chama as Tasks 
const monitorarMudancas = (cb) => {
    watch('app/**/*.html', appHtml)
    watch('app/**/*.css',appCss)
    watch('app/**/*js', appJs)
    watch('assets/**/*.*',appImgs)
}

const servidor = (cb) => {
    return gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true,            
    }))
}

module.exports = { monitorarMudancas, servidor }