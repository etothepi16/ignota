// doing this the long way because ¯\_(ツ)_/¯
const symbols = {
  '\u1DC5': /_B_L/g,
  '\u1DC4': /_H_T/g,
  '\u1DC8': /_R_F/g,
  ǁ: /\|\\\|\\/g,
  ʄ: /J\\_</g,
  ʛ: /G\\_</g,
  ɓ: /b_</g,
  ɗ: /d_</g,
  ɠ: /g_</g,
  ɻ: /r\\`/g,
  ˤ: /_\?\\/g,
  '\u2198': /<F>/g,
  '\u2197': /<R>/g,
  ɖ: /d`/g,
  ɦ: /h\\/g,
  ʝ: /j\\/g,
  ɭ: /l`/g,
  ɳ: /n`/g,
  ɸ: /p\\/g,
  ɽ: /r`/g,
  ɹ: /r\\/g,
  ʂ: /s`/g,
  ɕ: /s\\/g,
  ʈ: /t`/g,
  ɧ: /x\\/g,
  ʐ: /z`/g,
  ʑ: /z\\/g,
  ʙ: /B\\/g,
  ɢ: /G\\/g,
  ʜ: /H\\/g,
  ᵻ: /I\\/g,
  ɟ: /J\\/g,
  ɮ: /K\\/g,
  ʟ: /L\\/g,
  ɰ: /M\\/g,
  ɴ: /N\\/g,
  ʘ: /O\\/g,
  ʀ: /R\\/g,
  ᵿ: /U\\/g,
  ħ: /X\\/g,
  ˑ: /:\\/g,
  ɘ: /@\\/g,
  ɚ: /@`/g,
  ʕ: /\?\\/g,
  ʢ: /<\\/g,
  ʡ: />\\/g,
  '!': /\!\\/g,
  ǀ: /\|\\/g,
  '\u2016': /\|\|/g,
  ǂ: /=\\/g,
  '\u203F': /-\\/g,
  '\u0308': /_"/g,
  '\u031F': /_\+/g,
  '\u0320': /_-/g,
  '\u0325': /_0/g,
  ʼ: /_>/g,
  '\u032F': /_\^/g,
  '\u031A': /_}/g,
  '\u0318': /_A/g,
  '\u033A': /_a/g,
  '\u030F': /_B/g,
  '\u031C': /_c/g,
  '\u032A': /_d/g,
  '\u0334': /_e/g,
  '\u0302': /_F/g,
  ˠ: /_G/g,
  '\u0301': /_H/g,
  ʰ: /_h/g,
  ʲ: /_j/g,
  '\u0330': /_k/g,
  '\u0300': /_L/g,
  ˡ: /_l/g,
  '\u0304': /_M/g,
  '\u033B': /_m/g,
  '\u033C': /_N/g,
  ⁿ: /_n/g,
  '\u0339': /_O/g,
  '\u031E': /_o/g,
  '\u0319': /_q/g,
  '\u030C': /_R/g,
  '\u031D': /_r/g,
  '\u030B': /_T/g,
  '\u0324': /_t/g,
  '\u032C': /_v/g,
  ʷ: /_w/g,
  '\u0306': /_X/g,
  '\u033D': /_x/g,
  ɑ: /A/g,
  β: /B/g,
  ç: /C/g,
  ð: /D/g,
  ɛ: /E/g,
  ɱ: /F/g,
  ɣ: /G/g,
  ɥ: /H/g,
  ɪ: /I/g,
  ɲ: /J/g,
  ɬ: /K/g,
  ʎ: /L/g,
  ɯ: /M/g,
  ŋ: /N/g,
  ɔ: /O/g,
  ʋ: /P/g,
  ɒ: /Q/g,
  ʁ: /R/g,
  ʃ: /S/g,
  θ: /T/g,
  ʊ: /U/g,
  ʌ: /V/g,
  ʍ: /W/g,
  χ: /X/g,
  ʏ: /Y/g,
  ʒ: /Z/g,
  '.': /\./g,
  ˈ: /"/g,
  ˌ: /%/g,
  ʲ: /'/g,
  ː: /:/g,
  ə: /@/g,
  æ: /{/g,
  ʉ: /}/g,
  ɨ: /1/g,
  ø: /2/g,
  ɜ: /3/g,
  ɾ: /4/g,
  ɫ: /5/g,
  ɐ: /6/g,
  ɤ: /7/g,
  ɵ: /8/g,
  œ: /9/g,
  ɶ: /&/g,
  ʔ: /\?/g,
  ꜛ: /\^/g,
  ꜜ: /\\!/g,
  '\u007C': /\|/g,
  '\u0329': /=/g,
  '\u02DE': /`/g,
  '\u0303': /~/g,
  '\u0361': /\)/g,
} // don't touch this unless STRICTLY necessary!

//===============Consonant definitions===============//
const nasals = ['m', 'F', 'n', 'n`', 'J', 'N', 'N\\']

const plosives = [
  'p',
  'b',
  't',
  'd',
  't`',
  'd`',
  'c',
  'J\\',
  'k',
  'g',
  'q',
  'G\\',
  '>\\',
  '?',
]

const fricatives = [
  'p\\',
  'B',
  'f',
  'v',
  'T',
  'D',
  's',
  'z',
  'S',
  'Z',
  's`',
  'z`',
  'C',
  'j\\',
  'x',
  'G',
  'X',
  'R',
  'X\\',
  '?\\',
  'H\\',
  '<\\',
  'h',
  'h\\',
]

const approximants = ['v\\', 'r\\', 'r\\`', 'j', 'M\\']

const trills = ['B\\', 'r', 'R\\']

const taps = ['4', 'r`']

const lateralFricatives = ['K', 'K\\']

const lateralApproximants = ['l', 'l`', 'L', 'L\\']

const lateralFlap = ['l\\']

const implosives = ['b_<', 'd_<', 'g_<', 'G\\_<', 'J\\_<']

const clicks = ['0\\', '|\\', '!\\', '=\\', '|\\|\\']

const coarticulations = ['W', 'w', 'H', 's\\', 'z\\', 'x\\']

const affricates = [
  'ts',
  'dz',
  'tS',
  'dZ',
  'ts\\',
  'dz\\',
  'tK',
  'kp',
  'gb',
  'Nm',
]

const consonants = {
  nasals,
  plosives,
  fricatives,
  approximants,
  trills,
  taps,
  lateralFricatives,
  lateralApproximants,
  lateralFlap,
  implosives,
  clicks,
  coarticulations,
  affricates,
}

//=============Vowel definitions=============//
const close_ = ['i', 'y', '1', '}', 'M', 'u']

const near_close = ['I', 'Y', 'I\\', 'U\\', 'U']

const close_mid = ['e', '2', '@\\', '8', '7', 'o']

const mid_ = ['@']

const open_mid = ['E', '9', '3', '3\\', 'V', 'O']

const near_open = ['{', '6']

const open_ = ['a', '&', 'A', 'Q']

const vowels = {
  close_,
  near_close,
  close_mid,
  mid_,
  open_mid,
  near_open,
  open_,
}
