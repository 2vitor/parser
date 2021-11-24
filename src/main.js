import Lexer from './Lexer.js'
import Parser from './Parser.js'

 // Usage
new Parser(new Lexer(expr).tokenize().tokens)
  .parse()
