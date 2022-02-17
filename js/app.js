
function getExpenses(products){
    const expensesInput = document.getElementById(products + '-input');
    const totalInputExpenses = expensesInput.value;
    return totalInputExpenses;
}

// function balance(){
//     incomeInput =  getExpenses('income');
   
// }

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
