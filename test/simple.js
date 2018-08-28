const sendkeys = require('../index.js')
if (process.platform === 'darwin') {
  sendkeys.activate('CotEditor')
  sendkeys.send('"a"',['command'])
  sendkeys.send('delete')

  sendkeys.send('"This"')
  sendkeys.send('space')
  sendkeys.send('"is"')
  sendkeys.send('space')
  sendkeys.send('"Mike."')
}
if (process.platform == 'win32') {
  sendkeys.run('calc')
  sendkeys.sleep(2)
  sendkeys.activate('Calcurator')
  sendkeys.send('1{+}2{+}3{enter}')
}

