/**
 1. add event handlers with the withdrawn button
 2. get the withdraw amount from the withdraw input field
 2-5. also make sure to convert the input field into a number by using parseFloat() function
 3. Get previous withdraw amount total
 4. calculate total withdraw amount
 4-5. set total withdraw amount
 */

// step 1
document.getElementById('btn_withdraw').addEventListener('click', function () {
    // step 2
    const withdrawField = document.getElementById('withdraw_field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3
    const previousWithdrawField = document.getElementById('withdraw_total');
    const previousWithdrawAmountString = previousWithdrawField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // step 4
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    // step 5
    previousWithdrawField.innerText = currentWithdrawTotal;

    // step 6
    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7
    const presentBalanceTotalAmount = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = presentBalanceTotalAmount;

    // step 8
    withdrawField.value = '';
});