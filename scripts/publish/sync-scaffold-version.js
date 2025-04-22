// node scripts/publish/sync-scaffold-version.js
// node scripts/publish/sync-scaffold-version.js theme
import { existsSync } from 'fs';
import { readJSONSync, writeJSONSync } from 'fs-extra/esm';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextJson = readJSONSync(join(__dirname, '../../package.json'));
const nextVersion = nextJson.version;
const nextVersions = {
  ...nextJson.dependencies,
  ...nextJson.devDependencies,
};
const name = (process.argv.length >= 2 ? process.argv[2] : '') || 'ng-yunzai';
const packagePath = resolve(__dirname, name.startsWith('../') ? name : `../../../${name}/package.json`);
console.log(`Use packagePath: ` + packagePath);
if (!existsSync(packagePath)) {
  throw Error(`所选的文件不存在, ${packagePath}`)
}

const json = readJSONSync(packagePath);
// Update third party
['dependencies', 'devDependencies'].forEach(type => {
  Object.keys(json[type])
    .filter(key => !!nextVersions[key])
    .forEach(key => {
      json[type][key] = nextVersions[key];
    });
});
// Update ng-yunzai libs
if (name === 'ng-yunzai') {
  json.version = nextVersion;
}
['abc', 'acl', 'auth', 'chart', 'cache', 'mock', 'form', 'theme', 'util','bis','bcs','socket'].forEach(v => {
  json.dependencies[`@yelon/${v}`] = `^${nextVersion}`;
});
json.devDependencies[`@yelon/testing`] = `^${nextVersion}`;
json.devDependencies[`ng-yunzai`] = `^${nextVersion}`;

// Save
writeJSONSync(packagePath, json, {
  spaces: 2,
});
