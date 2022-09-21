class CheckingAccount extends Account {
  constructor(balance,overdraft) {
    super(balance);
    this._overdraft = overdraft;
  }
  getOverDraft() {
    return this.overDraft;
  }
  setOverDraft(amount) {
    if (this.withdraw < this._balance) 
    this.overDraft = -amount;
  }
  /**
   * 
   * @param {amount} amount 
   */
   withdraw(amount) {
    if (super.balance - amount > this.overdraftLimit) {
      throw new RangeError('Overdraft Limit Succeeded');
    } else {
      super.withdraw(amount);
    }
  }
  toString() {
    return (
      'Checking Account' +
      super.getNumber() +
      ': OverDraft Limit is ' +
      this._overdraftLimit
    );
  }
  endOfMonth() {
    if(super.getBalance() < 0){
        return "Warning, low balance CheckingAccount " +super.getNumber() + " :balance " + super.getBalance() + " Overdraft limit : " + this._overdraftLimit; 
    }
}
}
