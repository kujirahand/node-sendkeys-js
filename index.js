const {spawn, spawnSync} = require("child_process")

let config
switch (process.platform) {
  case 'darwin':
    config = require('./platform/darwin')
    break
  case 'win32':
    config = require('./platform/win32')
    break
  case 'linux':
    config = require('./platform/linux')
  default:
    throw new Error('Unknown platform: ' + process.platform)
}

function cmd(args) {
  const app = args[0]
  args = args.slice(1)
  console.log(app, args)
  const {stderr, status} = spawnSync(app, args)
  if (status !== 0) throw stderr
}

function send(keys, metaKeys) {
  cmd(config.gen(keys, metaKeys))
}
function activate(title) {
  cmd(config.activate(title))
}

module.exports = {
  'send': send,
  'activate': activate
}


