document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDeposit = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDeposit

    const totalBalanceElement =  document.getElementById('total-balance');
    const previousTotalBalanceString =  totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = currentTotalBalance;



    depositField.value = '';

})