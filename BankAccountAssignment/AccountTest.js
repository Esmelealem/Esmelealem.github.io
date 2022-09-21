
let account=new Account(1020);

account.deposit(100);
let withdrawCheck = new Account(1002);
withdrawCheck.deposit(50);
withdrawCheck.withdraw(25);

let savingAccount = new SavingsAccount(102,20);
let savingAccount2 = new SavingsAccount(102,20);
savingAccount2.setInterest(20);

let checkingAccount = new CheckingAccount(125,500);
let checkingAccount2 = new CheckingAccount(125,200);

let bankAccount = new Bank();
bankAccount.addAccount();
bankAccount.addAccount();

// bankAccount.add(15);
let checking = bankAccount.addCheckingsAccount(15);
bankAccount.addCheckingsAccount(500);

window.onload = tester;

function tester(){
    describe("getNumber", function(){
        it("returns the account number", function(){
            assert.strictEqual(account.getNumber(),1020);
        });
        it('Deposits 100 to the Account Number 1001', function(){
            assert.equal(account.getBalance(), 100.0);
    
        });
    
        it('With Draw 25 from the balance of 50 to have 25', function(){
            assert.equal(withdrawCheck.getBalance(),25)
               
        })
        it('performs needed action at the end of the month', function(){
            assert.equal(account.endOfMonth(),"");
        })
        it('Represents this account number', function(){
            assert.equal(account.toString().charAt(0),"A");
        })    
    });
    describe("Saving Account Number Creation", function(){
        it('Creates Saving Account number with number 102 ', function(){
                assert.equal(savingAccount.getNumber(),102);
                assert.equal(savingAccount.getInterest(),20);
        });
        it('Add an Interest rate into the account number 102', function(){
            assert.equal(savingAccount.getInterest(),20);
        });
        it("gets an interest to the account number ", function(){
            assert.equal(savingAccount2.getInterest(), 20);
    
        });
        it('Represents the Saving account number', function(){
            assert.equal(savingAccount2.toString().charAt(0),"S");
        });    
    
    });
    describe("Checking Account Number Creation", function(){
        it('Creates Saving Account number with number 107 ', function(){
                assert.equal(checkingAccount.getNumber(),125);
                assert.equal(checkingAccount.getOverDraft(),5000);
        });
        it('Add an Interest rate into the account number 102', function(){
            assert.equal(checkingAccount2.getOverDraft(),200);
        });
        it("Sets an interest ito the account number ", function(){
            assert.equal(checkingAccount.getOverDraft(), 5000);
    
        });
        it('Represents the Saving account number', function(){
            assert.equal(checkingAccount.toString().charAt(0),"C");
        });
    });
    
    describe("Bank Accounts Creation Test", function(){
        it('creates the first bank account with account number 101 ', function(){
                assert.equal(bankAccount.addAccount(),101);      
        });
        it('Add Saving account to the Bank and return account number', function(){
            assert.equal(bankAccount.addSavingsAccount(15).getNumber(),101);
        });
        it("Open A checking account at bank with a number 105 ", function(){
            assert.equal(bankAccount.addCheckingsAccount(15).getNumber(), 101);
    
        });
        it('Represents the Saving account number', function(){
            assert.equal(checkingAccount.toString().charAt(0),"C");
        });
    });
    mocha.run();
}