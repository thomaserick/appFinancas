//Ler os codigos da aplicação
const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

gulp.task("app", ["app.html", "app.css", "app.js", "app.assets"]);

//Tudo que tiver html
gulp.task("app.html", () => {
  return gulp
    .src("app/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true })) //Retira os espaços em branco
    .pipe(gulp.dest("public")); //Joga na pasta destino public
});

gulp.task("app.css", () => {
  return gulp
    .src("app/**/*.css")
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("public/assets/css"));
});

gulp.task("app.js", () => {
  return gulp
    .src("app/**/*.js")
    .pipe(babel({ presets: ["env"] })) //Coloca na versao do es5
    .pipe(uglify()) //Pega os arquivos para retirar espaços em brancos/identações coisas do tipo
    .pipe(concat("app.min.js")) //Juntar tudo em um arquivo só
    .pipe(gulp.dest("public/assets/js"));
});

//Copia tudo para dentro de assets
gulp.task("app.assets", () => {
  return gulp.src("assets/**/*.*").pipe(gulp.dest("public/assets"));
});
