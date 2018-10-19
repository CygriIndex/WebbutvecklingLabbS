const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



class Calculator {
  constructor() {
    this.value = 0
    this.display = ''
    this.reset()
  }

next() {
  readlineInterface.question('', s => {
    this.input(s)
    this.next()
  })

}


  input(input) {
    if(!isNaN(input)){
      var lastOperation = this.operations[this.operations.length -1]
      lastOperation.value = lastOperation.value.toString()+input
      lastOperation.value = Number(lastOperation.value)
    } else {
      switch (input) {
        case '+': this.pushOperation('+')
          break
        case '-': this.pushOperation('-')
          break
        case '*': this.pushOperation('*')
          break
        case '/': this.pushOperation('/')
          break
        case '=': this.equals()
          break
        case 'ce': reset()
          break
          default: console.log("You SucK!")

      }
    }

  }



  pushOperation(operator){
    this.operations.push(new Operation(operator))
  }

  equals(){
    var num = 0
    for (let operation of this.operations) {
      switch (operation.operator) {
        case '+': num += operation.value
          break
        case '-': num -= operation.value
          break
        case '*': num *= operation.value
          break
        case '/': num /= operation.value
          break

      }

    }
    console.log(num)
  }

  reset() {
    this.operations = [new Operation('+',0)]
  }


}

class Operation {
  constructor(operator, value = 0){
    this.operator = operator
    this.value = value
  }
}

var c = new Calculator()
c.next()
