// gen command
module.exports.gen = function (keys, metaKeys) {
  const cmd = ['powershell', '-command']
  cmd.push(`
$wshell = New-Object -ComObject wscript.shell;
$wshell.SendKeys("${keys}");
  `)
  return cmd
}

// ative command
module.exports.activate = function (title) {
  const cmd = ['powershell', '-command']
  cmd.push(`
$wshell = New-Object -ComObject wscript.shell;
$wshell.AppActivate("${title}");
  `)
  return cmd
}

module.exports.run = function (path) {
  const cmd = ['powershell', '-command']
  cmd.push(`
$wshell = New-Object -ComObject wscript.shell;
$wshell.run("${path}");
  `)
  return cmd
}
module.exports.sleep = function (v) {
  const cmd = ['powershell', '-command']
  cmd.push(`Start-Sleep -s ${v}`)
  return cmd
}


