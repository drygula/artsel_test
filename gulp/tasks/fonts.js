import fs from "fs";
import ttf2woff2 from "gulp-ttf2woff2";

export const fontConverter = () => {
  return app.gulp
    .src(app.path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts));
};

export const fontStyle = () => {
  let fontsFile = `${app.path.sourceFolder}/scss/fonts.scss`;
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split("-")[0];
            let fontWeight = fontFileName.split("-")[1];
            switch (fontWeight.toLowerCase()) {
              case "thin":
                fontWeight = 100;
                break;
              case "extralight":
                fontWeight = 200;
                break;
              case "light":
                fontWeight = 300;
                break;
              case "regular":
                fontWeight = 400;
                break;
              case "medium":
                fontWeight = 500;
                break;
              case "semibold":
                fontWeight = 600;
                break;
              case "bold":
                fontWeight = 700;
                break;
              case "extrabold":
                fontWeight = 800;
                break;
              case "black":
                fontWeight = 900;
                break;
              default:
                fontWeight = 400;
            }
            fs.appendFile(
              fontsFile,
              `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n\t}\r\n`,
              cb
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log("File fonts/fonts.scss already exists");
      }
    }
  });

  return app.gulp.src(`${app.path.sourceFolder}`);
  function cb() {}
};
