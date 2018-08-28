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
module.exports.activate= function (title) {
  const cmd = ['powershell', '-command']
  cmd.push(`
$wshell = New-Object -ComObject wscript.shell;
$wshell.AppActivate("${title}");
  `)
  return cmd
}

