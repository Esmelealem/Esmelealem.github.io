
let account=new Account(1020);

account.deposit(100);
let withdrawCheck = new Account(1002);
withdrawCheck.deposit(50);
withdrawCheck.withdraw(25);

let savingAccount = new SavingsAccount(102,20);
let savingAccount2 = new SavingsAccount(102,20);
savingAccount2.setInterest(35);

let checkingAccount = new CheckingAccount(125,500);
let checkingAccount2 = new CheckingAccount(125,200);

let bankAccount = new Bank();
bankAccount.addAccount();
bankAccount.addAccount();
bankAccount.addSavingAccount(15);
let checking = bankAccount.addCheckingAccount(15);
bankAccount.addCheckingAccount(500);

window.onload = tester;

function tester(){
    describe("getNumber", function(){
        it("returns the account number", function(){
            assert.strictEqual(account.getNumber(),1020);
        });
    });
    describe("getNumber", function(){
        it("returns the account number", function(){
            let accountNumber=8809342;
            assert.strictEqual(getNumber(),accountNumber);
        });
    });

    mocha.run();
}