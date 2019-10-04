module.exports = function zeros(expression) {
	let arr1 = expression.split('*');
	let multipl = 1;
	let resultNum = 1n;
	let expr1 = /[0-9]+/;

	for (i = 0; i < arr1.length; i++) {
		
		let number = arr1[i].match(expr1);
		
    if (arr1[i].length - number.toString().length === 1) {
			function factorial(x) {
			return (BigInt(x) === 1n) ?  1n : BigInt(x) * factorial(x - 1);
		}
			multipl = factorial(number);
		} else if (arr1[i].length - number.toString().length === 2 && number % 2 === 0) {
      function evenfactorial(x) {			
        return (BigInt(x) === 0n) ? 1n : BigInt(x) * evenfactorial(x - 2);
      }
			multipl = evenfactorial(number);
		} else {
			function oddfactorial(x) {
        return (BigInt(x) <= 1n) ? 1n : BigInt(x) * oddfactorial(x - 2);
      }
			multipl = oddfactorial(number);        
		}
		resultNum *= multipl;
	}

	let expr2 = /0+$/;
	let z = resultNum.toString().match(expr2);
  return (z === null) ? 0 : z.toString().length;
}
