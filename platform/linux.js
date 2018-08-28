// gen command
module.exports.gen = function (keys, metaKeys) {
  const cmd = ['xdotool', 'key', keys]
  return cmd
}

// ative command
module.exports.activate= function (title) {
  const cmd = ['xdotool', 'windowactivate', title]
  return cmd
}

