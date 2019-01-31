const axios = require('axios')
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}
const module


const mfs = new MemoryFs

const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs

serverCompiler.watch({}, (err, stats) => {
  if (err) {
    throw err
  }
  stats = stats.toJson()
  stats.errors.forEach(err => {
    console.error(err)
  });
  stats.warnings.forEach(warn => {
    console.log(warn)
  })
  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  const bundle = mfs.readFileSync(bundlePath)
})

module.exports = function (app) {
  app.get('*', function (req, res) {

  })
}