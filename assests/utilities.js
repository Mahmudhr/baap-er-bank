function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField = '';
    return inputFieldValue;
}
function getTextValueById(elementId) {
    const textField = document.getElementById(elementId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    textField = '';
    return textFieldValue;
}
function setTextElementValueById(elementId, newValue) {
    const textField = document.getElementById(elementId);
    textField.innerText = newValue;
}



document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositValue = getInputValueById('deposit-field');
    const previousDepositValue = getTextValueById('deposit-total');
    const currentDepositValue = previousDepositValue + newDepositValue;
    setTextElementValueById('deposit-total', currentDepositValue);
    const previousBalance = getTextValueById('balance-total');
    const currentBalance = previousBalance + newDepositValue;
    setTextElementValueById('balance-total', currentBalance);
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawValue = getInputValueById('withdraw-field');
    const previousWithdrawValue = getTextValueById('withdraw-total');
    const currenetWithdrawValue = previousWithdrawValue - newWithdrawValue;
    setTextElementValueById('withdraw-total', currenetWithdrawValue);
    const previousBalance = getTextValueById('balance-total');
    const currentBalance = previousBalance - newWithdrawValue;
    setTextElementValueById('balance-total', currentBalance);
})
