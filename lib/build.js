import * as fs from "node:fs";
import { join } from "node:path";
import { load } from "./structures.js";

const destDir = './dist';

const output = {
    structures: load(true),
    generatedAt: new Date().toISOString()
}

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir)
}
const destFn = join(destDir, 'index.json')
fs.writeFileSync(destFn, JSON.stringify(output, null, 2))
console.log(`Writed: ${destFn}`)

const destJsFn = join(destDir, 'structures.js')
fs.writeFileSync(destJsFn, `export default ${JSON.stringify(output)};`)
console.log(`Writed: ${destJsFn}`)