const readline =  require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number1)=> {
  rl.question('Enter another number: ', (number2) => {
    let sum = parseFloat(number1) + parseFloat(number2);
    console.log('The sum is: ' + sum);
    rl.close()
  })
})
