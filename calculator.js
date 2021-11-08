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
    add(x,y){
        let sum=x+y;
        // console.log("summmmmmmm,",sum);
        return sum;
    }
    subtract(x,y){
        let sub1=x-y;
        // console.log("subcvb",sub1);
        return sub1;
    }
    multiply(...args){
        let mul=1;
        for(let i of args){
            mul*=i;
            // console.log("muliiiiiiii",mul);
        }
        // console.log("mul",mul);
        return mul;
    }
    divide(x,y){
        var div=x/y;
        // console.log("div",div);
        return div;
    }

    

}
var calculator=new Calculator()
module.exports=calculator;