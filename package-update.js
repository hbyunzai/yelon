const fs = require("fs")

const yelonPackageJSON = require("./package.json")
const delonPackageJSON = require("./package-delon.json")



Object.keys(yelonPackageJSON.dependencies).map((packageName) => {
  if(delonPackageJSON.dependencies[packageName]) {
    yelonPackageJSON.dependencies[packageName] = delonPackageJSON.dependencies[packageName]
  }
})


Object.keys(yelonPackageJSON.devDependencies).map((packageName) => {
  if(delonPackageJSON.devDependencies[packageName]){
    yelonPackageJSON.devDependencies[packageName] = delonPackageJSON.devDependencies[packageName]
  }
})

const jsonStr = JSON.stringify(yelonPackageJSON)


fs.writeFileSync("./package-yelon.json",Buffer.from(jsonStr))
