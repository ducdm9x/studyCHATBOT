const patternDict =[{
   pattern: '\\b(?<greeting>Hi|Hello|Hey|Duong Minh Duc)\\b',
   intent :'Hello'

},{
   pattern: '\\b(bye|exit)\\b',
   intent: 'Exit'
}];

module.exports = patternDict;