// Starting with an X-SAMPA parser
var xsampa = document.getElementById('x-sampa-text')
var output = document.getElementById('x-sampa-output')
var ipa = Object.keys(symbols)

xsampa.oninput = function() {
  output.value = parseXsampa(xsampa.value)
}

function parseXsampa(value) {
  var valCopy = value
  ipa.forEach((symbol) => (valCopy = valCopy.replace(symbols[symbol], symbol)))
  return valCopy
}
