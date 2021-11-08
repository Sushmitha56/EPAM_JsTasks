const results={}
function fib(n){
    if(n<=1){
        return n
    }
    if(n in results){
        return results[n]
    }
    else{
        results[n]=fib(n-2)+fib(n-1)
    }
    return results[n]
}
console.log(fib(0));