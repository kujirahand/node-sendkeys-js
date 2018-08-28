# node-sendkeys-js
 - VB SendKeys emulation for Node.js
 - Supported: win/mac/linux(xdotool)


## how to use

```
const sendkeys = require('../index.js')

// for mac
sendkeys.send('f5')

// for win
sendkeys.send('{f5}')
```

## api

### sendKeys(keys)

send keys like VB SendKeys

### send(keys, metaKeys)

send raw key data with metaKeys(Array).

### activate(title)

activate title's window.



