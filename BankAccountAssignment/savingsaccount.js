class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
    this._interest=interest;
}

getInterest(){
    return this._interest;
}
setInterest(interest){
    
 this._interest=interest;//needs calculation
}

 addInterest(){
     if (this.interest <= 0) {
        throw new RangeError("Interest amount has to be greater than zero");
    }
    //  let amount=this.getBalance()*this.interest/100;
     return (this.getBalance() * this._interest)/100;
    // return this._balance+=amount;
 }
 toString() {
    return "Saving Account " + this.interest + ": balance " + this.getBalance();
}
}