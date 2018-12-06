const path = require('path')
console.log(path.resolve('../', '../../package.json'))
const pkg = require('../package.json')
console.log(pkg)
export default {
  
    projectName: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
    appName: pkg.app && pkg.app.name || pkg.appName,
    dependencies: pkg.dependencies,
    engines: pkg.engines,
    license: pkg.license
 
  
}