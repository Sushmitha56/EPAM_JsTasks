const calculator=require("./calculator");

class Intrest{
    constructor(p,t){
        this.p=p;
        this.t=t;
    }
    calculate(){
        let si;
        let amt;
        let tamt;
        let t1=calculator.divide(this.t,12)
        if(this.t<=12){
            amt=calculator.multiply(this.p,6,t1)
            // console.log("am1ttttttttttt",t1);
            si=calculator.divide(amt,100)
            console.log("simple intrest",si);
            tamt=this.p+si
            return tamt;

        }
        let r1=calculator.divide(5.5,100)
        // console.log("r1",r1);
        let r2=calculator.add(1,r1)
        let pow=Math.pow(r2,t1)
        // console.log("pow",pow);
        amt=calculator.multiply(this.p,pow)
        // console.log("amt",amt);
        let compound_intrest=calculator.subtract(amt,this.p)
        console.log("compound intrest",compound_intrest);
        tamt=this.p+Math.ceil(compound_intrest)
        return tamt;
    }
}

var intrest=new Intrest(4000,12);
console.log("Total amount",intrest.calculate());