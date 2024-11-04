let totalBudget = 0;
let totalExpenses = 0;

// Function to set the budget
function setBudget() {
  const budgetInput = document.getElementById("budgetInput");
  totalBudget = parseFloat(budgetInput.value) || 0;
  document.getElementById("totalBudget").innerText = totalBudget.toFixed(2);
  updateRemainingBalance();
  budgetInput.value = "";
}

// Function to add an expense
function addExpense(event) {
  event.preventDefault();

  const expenseName = document.getElementById("expenseName").value;
  const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

  if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) return;

  totalExpenses += expenseAmount;
  updateRemainingBalance();

  const expenseList = document.getElementById("expenseList");
  const expenseItem = document.createElement("div");
  expenseItem.classList.add("expense-item");
  expenseItem.innerHTML = `
    <span>${expenseName}</span>
    <span>$${expenseAmount.toFixed(2)}</span>
  `;

  expenseList.appendChild(expenseItem);

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}

// Function to update remaining balance
function updateRemainingBalance() {
  const remainingBalance = totalBudget - totalExpenses;
  document.getElementById("totalExpenses").innerText = totalExpenses.toFixed(2);
  document.getElementById("remainingBalance").innerText = remainingBalance.toFixed(2);
}
