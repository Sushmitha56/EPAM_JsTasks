function isPalindrome(arg){

    let rev=arg.split("").reverse().join("");
    // console.log("gjhhl",rev);
    if(arg==rev){
        return true;
    }
    return false;

}
console.log(isPalindrome("sudus"));