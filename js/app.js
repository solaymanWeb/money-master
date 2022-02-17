//get all input value for function
function getExpenses(products){
    const expensesInput = document.getElementById(products + '-input');
    const totalInputExpenses = expensesInput.value;
    
if(totalInputExpenses == ""){
    alert('Opps ! Please fill up input box')
    return 

}else if(totalInputExpenses < 0){
    alert('Opps ! Negetive Number Is Not Allow')

}else{
    return totalInputExpenses;
}
}

// calculate event handler
document.getElementById('calculate-btn').addEventListener('click', function(){

    const totalIncome = getExpenses('income');
    const foodExpenses = getExpenses('food');
    const rentExpenses = getExpenses('rent');
    const clothesExpenses = getExpenses('clothes');
    //total Expenses
   const totalExpenses = parseFloat(foodExpenses) + parseFloat(rentExpenses )+parseFloat(clothesExpenses);

   const totalExpensesDisplay = document.getElementById('total-expenses-display')
   totalExpensesDisplay.innerText = totalExpenses;

   const balance = totalIncome - totalExpenses;
   const balanceDisplay =  document.getElementById('balance-display')
   balanceDisplay.innerText = balance;

})
//save button event handelar
document.getElementById('save').addEventListener('click', function(){

    const totalIncomes = getExpenses('income');
    const previousBalance = totalIncomes;
   
    const saveInput = document.getElementById('save-input')
    const savePercentage = saveInput.value;

    const totalPercentage = (previousBalance/100)* savePercentage;

    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText =totalPercentage;
    const totalSavingAmount= savingAmount.innerText


    const balanceDisplay =  document.getElementById('balance-display');

    const preBalance = balanceDisplay.innerText;

    if(preBalance < totalPercentage){
        alert(' You Owe ! You have no money for balance');
        return;
    }else{
        const remaidarBalance = preBalance - totalSavingAmount;
        document.getElementById('remaining-balance').innerText = remaidarBalance;
    }



    
    
    
})
