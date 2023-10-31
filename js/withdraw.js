document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const NewWithdrawAmountString = withdrawField.value;
    const NewWithdrawAmount = parseFloat(NewWithdrawAmountString);
    withdrawField.value = '';

    if (isNaN(NewWithdrawAmount)) {
        alert('please provide a valid number')
        return;
    }
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousTotalWithdrawString = withdrawTotalElement.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

    const balanceTotalElement = document.getElementById('total-balance');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if (previousTotalBalance < NewWithdrawAmount) {
        alert('bank akhn deulia');
        return;
    }

    const currentWithdrawAmount = previousTotalWithdraw + NewWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

    const totalWithdrawalbalance = previousTotalBalance - NewWithdrawAmount;
    balanceTotalElement.innerText = totalWithdrawalbalance;






})