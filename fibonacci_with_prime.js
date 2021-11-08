function fib(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
    if(number<=2){
        message="entera  input  value grater than 2"
        return message;
    }

  console.log("Fibonacci Series:");
  var arr = [];

  for (let i = 1; n1 <= number; i++) {
    // console.log(n1);
    arr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(arr);
  prime = [];
  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= num/2; i++) if (num % i === 0) return false;
    return num;
  }

  for (i of arr) {
    p = isPrime(i);
    if (p != false) {
      prime.push(p);
    }
  }
  console.log("prime", prime);
}
fib(100);
