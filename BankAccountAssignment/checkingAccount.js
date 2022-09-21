class CheckingAccount extends Account {
  constructor(number,overdraft) {
    super(number);
    this._overdraft = 5000;
  }
  get overDraft() {
    return this.overDraft;
  }
  set overDraft(amount) {
    if (this.withdraw < this._balance) 
    this.overDraft = -amount;
  }
  /**
   * 
   * @param {amount} amount 
   */
  withdraw(amount){
    if (amount >= this._overDraft) {
      throw new RangeError("Withdraw amount has reached your overdraft limit, You can't withdraw any more.");
  }
  if (amount === 0 ) {
      throw Error("You can withdraw upto your overdraft limit funds!");
  }
  this.getBalance() -= amount;      
  }
}
