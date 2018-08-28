// gen command
module.exports.send = function (keys, metaKeys) {
  const cmd = ['xdotool', 'key', keys]
  return cmd
}

module.exports.sendKeys = function (keys, metaKeys) {
  const cmd = ['xdotool', 'key', keys]
  return [cmd]
}

// ative command
module.exports.activate= function (title) {
  const cmd = ['xdotool', 'windowactivate', title]
  return cmd
}

module.exports.getActive = function () {
  const cmd = ['xdotool', 'wgetactivewindow']
  return cmd
}

