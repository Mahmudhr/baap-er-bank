// step-1 (add event listener to the deposit button)
document.getElementById('deposit-btn').addEventListener('click', function () {

    // step-2 (get the deposit amount from the diposit input field)
    // for input field, use .value to get the value inside the input
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3 (get the current total deposit)
    // for non-input tag( without input/text)use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4 (add numbers to set the total deposit)
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5 (get balance curerent total)
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 (calculate total balance)
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // step-7 (clear the deposit field)
    depositField.value = '';
})