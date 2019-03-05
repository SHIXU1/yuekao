var gulp = require("gulp");
var web = require("gulp-webserver");
var sass = require("gulp-sass");
gulp.task("scss", function() {
    return gulp.src("./str/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./str/css"))
})
gulp.task("auto", function() {
    return gulp.src("str")
        .pipe(web({
            port: 8080,
            // proxies: [{
            //     source: "index",
            //     target: "http//:localhost:3000/index"

            // }]
        }))
})
gulp.task("dev", function() {
    return gulp.watch("./str/scss/**/*.scss", gulp.series("scss", "auto"))
})