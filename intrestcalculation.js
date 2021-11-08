var calculator= require('./calculator')
console.log(calculator.add(7,9,8));
class IntrestCalculator{
    constructor(principal,rate,months){
        this.principal=principal;
        this.rate=rate;
        this.months=months;
    }
    calculate(){
        let si;
        let amount;
        if(this.months<=12){
            amount=calculator.multiply([this.principal,6,this.months])
            console.log("am1",amount);
            si=calculator.divide(amount,100)
            return si;

        }
        let divide=calculator.divide(7,100)
        console.log("divide",divide);
        let rate=calculator.add(1,divide)
        let time=calculator.divide(this.months,12)
        // console.log("time",time);
        let rate1=Math.pow(rate,time)
        console.log("pow",rate1);
        amount=calculator.multiply(this.principal,rate1);
        console.log("floor",amount);
        // calculator.subtract()
        let sub=calculator.subtract(amount,this.principal)
        console.log("am2",amount);
        console.log("sub",Math.ceil(sub));
    }  

}

var si2=new IntrestCalculator(4000,7,24)
si2.calculate()
