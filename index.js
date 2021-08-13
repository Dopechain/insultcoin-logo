// SPDX-License-Identifier: MIT
// This code is licensed under the MIT license.

let PSD = require("psd");
let fs = require("fs");
let path = require("path");
let colors = require("colors");

console.log("InsultCoin Logos".brightRed);
console.log("Run this before you commit to GitHub, please".red);

// delete old picture whatever files
fs.rmdirSync("./logos/png", { recursive: true });
console.log("Deleted old PNGs!".brightRed);
fs.mkdirSync("./logos/png");

fs.readdirSync("./logos/psd").forEach(async (file) => {
  if (path.extname(file) == ".psd") {
    console.log(
      "Found: " + file + ", will save as " + path.parse(file).name + ".png"
    );
    let psd = await PSD.open(path.join("logos", "psd", file));
    console.log("PSD opened for " + file);
    await psd.image.saveAsPng(
      path.join("logos", "png", path.parse(file).name + ".png")
    );
    console.log("Saved as PNG: " + path.parse(file).name + ".png");
  }
});
