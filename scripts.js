let balance = 1000; // Assuming the balance is in INR

function enterPin() {
    const pinInput = document.getElementById('pin').value;
    if (pinInput === '1234') {
        document.getElementById('message').innerText = 'PIN Accepted. Choose an action.';
        document.getElementById('actions').style.display = 'block';
        document.getElementById('pin').style.display = 'none';
        document.querySelector('.screen button').style.display = 'none';
    } else {
        document.getElementById('message').innerText = 'Incorrect PIN. Please try again.';
    }
}

function checkBalance() {
    alert(`Your balance is ₹${balance.toLocaleString('en-IN')}`); // Display balance in INR format
}

function withdraw() {
    const amount = parseFloat(prompt('Enter amount to withdraw:'));
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        alert(`Withdrawal successful. New balance is ₹${balance.toLocaleString('en-IN')}`); // Display updated balance
    } else {
        alert('Invalid amount or insufficient funds.');
    }
}

function deposit() {
    const amount = parseFloat(prompt('Enter amount to deposit:'));
    if (amount > 0) {
        balance += amount;
        alert(`Deposit successful. New balance is ₹${balance.toLocaleString('en-IN')}`); // Display updated balance
    } else {
        alert('Invalid amount.');
    }
}

function logout() {
    document.getElementById('message').innerText = 'Logged out. Please enter your PIN.';
    document.getElementById('actions').style.display = 'none';
    document.getElementById('pin').style.display = 'block';
    document.querySelector('.screen button').style.display = 'block';
}
