const OPERATORS = ['+', '-', '*', '/']

const Char = (char) => ({
  isNumber:   () => /-?\d/.test(char),
  isOperator: () => OPERATORS.includes(char),  
  isSpace:    () => /\s/.test(char),
  char
})

export default Char