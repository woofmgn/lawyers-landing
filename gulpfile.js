import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js, jsLibs } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { generalFonts } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
// import { ftp } from "./gulp/tasks/ftp.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, gulp.series(html)); //+ftp
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, gulp.series(js, jsLibs));
    gulp.watch(path.watch.images, images);
}

export { svgSprite };

// const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(generalFonts, gulp.parallel(copy, html, scss, js, jsLibs, images));
// const mainTasks = gulp.series(generalFonts, gulp.parallel(copy, html, scss, js, images));

const dev = gulp.series(reset, mainTasks, svgSprite, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, svgSprite);
const deployZIP = gulp.series(reset, mainTasks, zip);
// const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev };
export { build };
export { deployZIP };
// export { deployFTP };

gulp.task('default', dev);