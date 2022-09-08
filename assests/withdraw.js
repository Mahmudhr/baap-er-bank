// 1.add event handler with the withdraw button
//2. get the withdraw element from the withdraw input field (also make sure to convert the input into a number by using parseFloat)
//3.  get previous withdraw total
// 4. calculate total withdraw amount
//4.5  set total withdraw amount
// 5. get the previous balance total
// 6. claculate new balance total
// 6.5. set the balance total
// 7. clear the input field



// step-1
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-7
    withdrawField.value = '';

    if ((isNaN)(newWithdrawAmount)) {
        alert('Please, Provide a valid number');
        return;
    }


    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto tk nai');
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const newbalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newbalanceTotal;



})