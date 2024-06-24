debugger

var dd=navigator.plugins[0]
console.log(dd[0]==dd[0])
console.log(navigator.plugins[0][0]==navigator.plugins[0][0])
console.log(dd[0].enabledPlugin[0]==dd[0])
console.log(navigator.plugins[0][0].enabledPlugin==dd)
// console.log(navigator.plugins[0][0].enabledPlugin==dd[1].enabledPlugin)

debugger