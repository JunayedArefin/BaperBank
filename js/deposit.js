document.getElementById('depobtn').addEventListener('click',function(){
    
    //deposite field value collect
    const depositeField = document.getElementById('depofield');
    const newdepositeamount = depositeField.value;

    const newdepositeamountnum = parseFloat(newdepositeamount);

    //deposite amount get value
    const depocurrentamount = document.getElementById('depositcount');
    const depoCurrentTotal = depocurrentamount.innerText;
    const depoCurrentTotalnum = parseFloat(depoCurrentTotal);

    //add previus and new depo amount
    const totaldepo = depoCurrentTotalnum + newdepositeamountnum;

    //deposite input value send in deposite amount
    depocurrentamount.innerText = totaldepo;
    // clear the depo field
    depositeField.value = '';

    const balance = document.getElementById('Balancecount');
    const balanceValue = balance.innerText;
    const balanceValueNum =parseFloat(balanceValue);

    const totalbalance = newdepositeamountnum + balanceValueNum;

    balance.innerText = totalbalance;
})