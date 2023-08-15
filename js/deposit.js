// step 1: add event listeners to the deposit button
document.getElementById('btn_deposit').addEventListener('click', function () {
    // step 2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit_field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3: get the current deposit total amount
    // for non-input(element other than input, textarea) use .innerText to get the text
    const depositTotalElement = document.getElementById('deposit_total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4: add numbers to set total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total amount
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total amount
    const balanceTotalElement = document.getElementById('balance_total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate the total balance amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total amount
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear the deposit field
    depositField.value = '';
});