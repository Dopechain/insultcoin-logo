let PSD = require("psd");
let fs = require("fs");
let path = require("path");
let colors = require("colors");

console.log("InsultCoin Logos".brightRed);
console.log("Run this before you PR to GitHub, please".red);

fs.readdirSync("./logos/psd").forEach(async (file) => {
  if (path.extname(file) == ".psd") {
    console.log(
      "Found: " + file + ", will save as " + path.parse(file).name + ".png"
    );
    let psd = await PSD.open(path.join("logos", "psd", file));
    console.log("PSD opened for " + file);
    await psd.image.saveAsPng(
      path.join("logos", "png", path.basename(file) + ".png")
    );
    console.log("Saved as PNG: " + path.basename(file) + ".png");
  }
});
