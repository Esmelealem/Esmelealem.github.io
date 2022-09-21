class Bank {
  static NextNumber;
  constructor() {
    this.accounts = [];
    Bank.NextNumber = 100; // assuming the bank account number starts from 100
  }
  static generateAccountNumber() {
    return Bank.NextNumber + 1;
  }
  addAccount() {
    // return this._CheckingAccount+this._CheckingAccount;
    let result = Bank.generateAccountNumber();
    const account = new Account(result);
    this.accounts.push(account);
    return result;
  }
  addSavingsAccount(interest) {
    const savingAccount = new SavingAccount(
      Bank.generateAccountNumber(),
      interest
    );
    this.accounts.push(savingAccount);
    return savingAccount;
  }
  addCheckingsAccount(overdraft) {
    const checkingAccount = new CheckingAccount(Bank.generateAccountNumber(), overdraft);
    this.accounts.push(checkingAccount);
    return checkingAccount;
    }
  AccountReport() {
    return (
      "SavingsAccount: " +
      SavingsAccount +
      "," +
      "CheckingAccount: " +
      CheckingAccount
    );
  }
  closeAccount(number) {
    const acc = this.accounts.find((account) => account.number == number);
    this.accounts.splice(this.accounts.indexOf(acc), 1);
    return acc;
  }
  endOfMonth() {
    let report = accounts.map((account) => account.getNumber() + " \n");
    return report;
  }
  endOfMonth() {
    this.accounts.forEach((account) => {
      console.log(account.endOfMonth());
    });
  }
}
