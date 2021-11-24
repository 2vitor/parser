import Char from './utils/Char.js'

class Lexer {
  constructor(expr) {
    this.pos      = -1
    this.tokens   = []
    this.expr     = expr
    this.lastTok  = null;
    this.nextTok  = this.expr[this.pos + 1]
    this.nextChar = Char(this.nextTok)
    this.intStack = []
  }

  formToken(t, v) {
    return {
      type: t,
      value: t == 'int' ? Number(v) : v
    }
  }

  getToken() {
    this.pos++
    this.lastTok = Char(this.expr[this.pos])
    this.nextTok = this.expr[this.pos + 1]
    this.nextChar = Char(this.nextTok)
    if (this.lastTok.isSpace()) this.getToken()
  }

  readNumber(token) {
    if (this.lastTok.isNumber()) this.intStack.push(token)
    if (!this.nextChar.isNumber()) {
      this.tokens.push(
        this.formToken('int', this.intStack.join(''))
      )
      this.intStack = []

    }
    this.tokenize()
  }

  readOperator(token) {
    this.tokens.push(this.formToken('op', token))
    this.tokenize()
  }

  tokenize() {
    this.getToken()

    while (this.lastTok.isNumber()) {
      this.readNumber(parseInt(this.lastTok.char))
    }

    while (this.lastTok.isOperator()) {
      this.readOperator(this.lastTok.char)
    }

    return this
  }
}

export default Lexer