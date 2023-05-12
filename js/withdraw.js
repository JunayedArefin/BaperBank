document.getElementById('withbtn').addEventListener('click', function(){

   const withdrawField = document.getElementById('withField');
   const withdrawFieldvalue = withdrawField.value;
   const withdrawFieldvalueNum = parseFloat(withdrawFieldvalue);


   const withdrawBalance = document.getElementById('Withdrawcount');
   const withdrawBalanceValue = withdrawBalance.innerText;
   const withdrawBalanceValueNum = parseFloat(withdrawBalanceValue);

   const totalwithdraw = withdrawFieldvalueNum + withdrawBalanceValueNum;
   withdrawBalance.innerText = totalwithdraw;

   withdrawField.value = '';


   const totalBalance = document.getElementById('Balancecount');
   const totalBalanceValue = totalBalance.innerText;
   const totalBalanceValueNum = parseFloat(totalBalanceValue);

   const totalBalanceWithoutWithdraw = totalBalanceValueNum - totalwithdraw;
   totalBalance.innerText = totalBalanceWithoutWithdraw;

})