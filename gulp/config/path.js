import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const sourceFolder = "./src";
const buildFolder = "./dist";

export const path = {
  build: {
    js: `${buildFolder}/js`,
    scss: `${buildFolder}/css`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    js: `${sourceFolder}/js/app.js`,
    scss: `${sourceFolder}/scss/style.scss`,
    html: `${sourceFolder}/*.html`,
    fonts: `${sourceFolder}/fonts/*.ttf`,
    images: `${sourceFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },
  watch: {
    js: `${sourceFolder}/js/**/*.js`,
    scss: `${sourceFolder}/scss/**/*.scss`,
    html: `${sourceFolder}/**/*.html`,
    fonts: `${sourceFolder}/fonts/*.ttf`,
    images: `${sourceFolder}/img/**/*.{jpg,jpeg,svg,png,gif,webp}`,
  },
  clean: buildFolder,
  sourceFolder,
  buildFolder,
};
