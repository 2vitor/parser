class Parser {
  constructor(tokens) {
    this.tokens = tokens
  }

  defaultFunction(operator) {
    throw new SyntaxError(`Invalid operator '${operator}'`)
  }

  parse() {
    const [leftNumber, operator, rightNumber]  = this.tokens
    const operators = {
      '+': (l, r) => l + r,
      '-': (l, r) => l - r,
      '*': (l, r) => l * r,
      '/': (l, r) => l / r
    }

    
    if (leftNumber.type == 'int' && rightNumber.type == 'int') {
      const operatorFunction = operators[operator.value] || this.defaultFunction
      return operatorFunction(leftNumber.value, rightNumber.value)
    }
  }
}

export default Parser