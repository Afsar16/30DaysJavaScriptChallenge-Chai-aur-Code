// Activity 5: Private Fields (Optional) 

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    // Private field for balance
    #balance = 0;

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Method to check the balance
    checkBalance() {
        console.log(`Current Balance: $${this.#balance}`);
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const myAccount = new Account();

// Test deposit method
myAccount.deposit(1000);  // Logs: Deposited: $1000
myAccount.checkBalance(); // Logs: Current Balance: $1000

// Test withdraw method
myAccount.withdraw(300);  // Logs: Withdrew: $300
myAccount.checkBalance(); // Logs: Current Balance: $700

// Test withdrawing more than the balance
myAccount.withdraw(800);  // Logs: Insufficient funds.
myAccount.checkBalance(); // Logs: Current Balance: $700

// Test invalid deposit and withdrawal amounts
myAccount.deposit(-500);  // Logs: Deposit amount must be positive.
myAccount.withdraw(-200); // Logs: Withdrawal amount must be positive.
