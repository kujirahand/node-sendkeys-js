// memo) http://sengyoaruji.iinaa.net/20160603a.html
// memo) https://eastmanreference.com/complete-list-of-applescript-key-codes
//
const spkeys = {
  'return': 'keystroke return',
  'enter': 'keystroke return',
  'tab': 'keystroke tab',
  'home': 'key code 1',
  'space': 'key code 49',
  'spc': 'key code 49',
  'delete': 'key code 51',
  'bs': 'key code 51',
  'esc': 'key code 53',
  'escape': 'key code 53',
  'up': 'key code 126',
  'right': 'key code 124',
  'down': 'key code 125',
  'left': 'key code 123',
  'f1': 'key code 122',
  'f2': 'key code 120',
  'f3': 'key code 99',
  'f4': 'key code 118',
  'f5': 'key code 96',
  'f6': 'key code 97',
  'f7': 'key code 98',
  'f8': 'key code 100',
  'f9': 'key code 101',
  'f10': 'key code 109',
  'f11': 'key code 103',
  'f12': 'key code 111',
  'fn': 'key code 63'
}

// gen command
module.exports.gen = function (key, metaKeys) {
  key = key.toLowerCase()
  let action = `keystroke ${key}`
  if (spkeys[key]) action = spkeys[key]
  // same time press
  let opt = ''
  if (metaKeys !== undefined && metaKeys.length > 0) {
    const a = []
    for (let i in metaKeys) {
      a.push(metaKeys[i] + ' down')
    }
    opt = 'using {' + a.join(',') + '}'
  }

  const cmd = ['osascript', '-e']
  cmd.push(`tell application "System Events" to ${action}` + opt)
  return cmd
}

// ative command
module.exports.activate= function (title) {
  const cmd = ['osascript', '-e']
  cmd.push(`tell application "${title}" to activate`)
  return cmd
}
