// Starting with an X-SAMPA parser
var xsampa = document.getElementById('x-sampa-text')
var output = document.getElementById('ipa-text')
var ipa = Object.keys(symbols)

xsampa.oninput = function() {
  output.value = parseXsampa(xsampa.value)
}

function parseXsampa(value) {
  var valCopy = value
  ipa.forEach((symbol) => (valCopy = valCopy.replace(symbols[symbol], symbol)))
  return valCopy
}

/**********************************\
| Generating the phoneme inventory |
| https://wals.info/chapter/1      |
| https://wals.info/chapter/2      |
|                                  |
| CONSONANTS                       |
| small: 6-14 (16%)                |
| moderately small: 15-18 (22%)    |
| average: 19-25 (35%)             |
| moderately large: 26-33 (17%)    |
| large: 34+ (10%)                 |
|                                  |
| VOWELS                           |
| small: 2-4 (16%)                 |
| average: 5-6 (51%)               |
| large: 7-14 (33%)                |
\**********************************/

function getRandomInRange(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}

var cseed = getRandomInRange(1, 100)
var consonantSize =
  cseed <= 16
    ? 'sm'
    : cseed <= 38
    ? 'ms'
    : cseed <= 73
    ? 'av'
    : cseed <= 90
    ? 'ml'
    : 'lg'

var vseed = getRandomInRange(1, 100)
var vowelSize = vseed <= 16 ? 'sm' : vseed <= 67 ? 'md' : 'lg'

var numC =
  consonantSize == 'sm'
    ? getRandomInRange(6, 14)
    : consonantSize == 'ms'
    ? getRandomInRange(15, 18)
    : consonantSize == 'av'
    ? getRandomInRange(19, 25)
    : consonantSize == 'ml'
    ? getRandomInRange(26, 33)
    : getRandomInRange(34, 95)

var numV =
  vowelSize == 'sm'
    ? getRandomInRange(2, 4)
    : vowelSize == 'md'
    ? getRandomInRange(5, 6)
    : getRandomInRange(7, 14)

console.log(consonantSize, numC, vowelSize, numV)

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Now we have to choose segments according to some 'naturalism' heuristic...
// http://linguistics.berkeley.edu/phonlab/documents/2007/Hyman_Phono_Universals_PL.pdf
// Minimum of:
// 3 stops
// some feature contrasted with [-cont] (Rotokas [+stop] /p/ contrasts with [+voice] /b/, for example)
// contrast by place of articulation
// [+coronal] (dental, alveolar, postalveolar)
// /i/ or /j/
// At least two unrounded vowels
// At least one non-front vowel
// If a vertical vowel system: suprasegmental palatization and/or rounding contrast
// Front vowels tend to be unrounded, back vowels tend to be rounded
// More vowel distinctions are found high than mid, and more are found mid than low.
////////////////////////////////////////////////////////////////////////////////////////////////////////
