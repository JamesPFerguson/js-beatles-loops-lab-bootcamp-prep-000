function theBeatlesPlay(musicians, instruments) {
  var gen = [];
  for (var i = 0; i < 4; i++) {
    gen.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return gen;
}
function johnLennonFacts(facts) {
  var i = 0;
  var factR = []
  while (i < facts.length) {
    factR.push(`${facts[i]}!!!`)
    i++
  }
  return factR
}