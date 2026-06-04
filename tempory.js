import fs from "fs";
import path from "path";

const testPath = path.resolve(
  process.cwd(),
  "github-analyzer-frontend",
  "dist",
  "index.html"
);

console.log("INDEX PATH:", testPath);
console.log("EXISTS:", fs.existsSync(testPath));