//Responsavel para startar o servidor usando gulp
const gulp = require("gulp");
const watch = require("gulp-watch");
const webserver = require("gulp-webserver");

//Monitorando os arquivos
//Gera apenas o processo no app.js referente o start
gulp.task("watch", () => {
  watch("app/**/*.html", () => gulp.start("app.html"));
  watch("app/**/*.css", () => gulp.start("app.css"));
  watch("app/**/*.js", () => gulp.start("app.js"));
  watch("assets/**/*.*", () => gulp.start("app.assets"));
});

//Configuração do Servidor
//Registra os watchs que vão monitorar os arquivos
gulp.task("server", ["watch"], () => {
  return gulp.src("public").pipe(
    webserver({
      livereload: true, //Ele da o refresh no browser
      port: 4000, //Porta do servidor
      open: true, //Abre o browser
    })
  );
});
