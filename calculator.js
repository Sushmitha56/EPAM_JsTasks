// implement add,subtract,multiply,divide and other calculation methods in "calculator" class
//  and use them in a different class 
// "interest calculator" calculate total amount to be paid after calculating
//  the interest based on the number of months. if number of months is less 
//  than 12, calculate simple interest at 6% and if number of months greater than 
//  12 then calculate compund interest at 5.5% interest formulas can be found 
//  at : https://byjus.com/interest-formula/

class Calculator{
    constructor(p,r,t){
        this.p=p;
        this.r=r;
        this.t=t;
    }
    add(){}
    subtract(){}
    multiply(){
        var mul=this.p*this.t*this.r
        console.log("mul",mul);
        return mul;
    }
    divide(){
        var div=this.multiply()/100;
        console.log("div",div);
    }

    

}
class IntrestCalculator extends Calculator{
    constructor(p,r,t){
        super(p,r,t)
    }
    simpleintrest(mul){
        let si=mul/100
        console.log("simple intrest", si);

    }
    compoundintrest(){}

}

var si2=new IntrestCalculator(10000,2,13)
x=si2.multiply()
si2.simpleintrest(x);