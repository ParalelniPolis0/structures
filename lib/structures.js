import * as fs from 'node:fs';
import * as path from 'node:path';
import * as yaml from 'js-yaml';

const srcDir = "./src";

export function load(full = false) {
    const items = []
    for (const fn of fs.readdirSync(srcDir)) {
        const fullFn = path.join(srcDir, fn);
        const id = fn;
        const indexFn = path.join(srcDir, id, 'index.yaml');
        const index = yaml.load(fs.readFileSync(indexFn));
        items.push(index);
    }
    return items
}