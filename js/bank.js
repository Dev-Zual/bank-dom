function getInputField(num) {
  const getInputValue = document.getElementById(num);
  const newInputText = getInputValue.value;
  // convert input diposit value
  const convertNewInput = parseFloat(newInputText);
     // clear the diposit input field
     getInputValue.value = '';
  return convertNewInput;
}
// total field
function updateTotalField(totalField, convertNewInput) {
  // call the previous value where show balance
  const preveousInputtTex = document.getElementById(totalField);
  // get previous amount where show the balance
  const preveousInputAmount = preveousInputtTex.innerText;
  // convert previous diposit value
  const convertPreveousAmount = parseFloat(preveousInputAmount);
  // total amount
  const newDipositTotal = convertNewInput + convertPreveousAmount;
  preveousInputtTex.innerText = newDipositTotal;
}
// update balance
function updateBalance(getNewBalance, isAdd) {
      // call the current balance
      const currentBlance = document.getElementById('diposit-total');
      const newBlance = currentBlance.innerText;
      // convert current balance
      const converNewBlance = parseFloat(newBlance);
      // sum & call the total balance
  if (isAdd == true) {
    currentBlance.innerText = converNewBlance + getNewBalance;
  }
  else {
    currentBlance.innerText = converNewBlance - getNewBalance;
  }
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    // call the function input field
  const convertNewDiposit = getInputField('input-diposit');
    // function for field
  // condition for invalid input
  if (convertNewDiposit > 0) {
    updateTotalField('diposit-balance', convertNewDiposit);
    // call the update balance function
    updateBalance(convertNewDiposit, true);
  }
});

// withdraw balance
document.getElementById('widthdraw-btn').addEventListener('click', function () {
  // call the function input field
  const convertNewWithdraw = getInputField('input-widthdraw');
  // condition for invalid input
if (convertNewWithdraw > 0) {
    // call the function field
    updateTotalField('withdraw', convertNewWithdraw);
    // call the withdraw function
    updateBalance(convertNewWithdraw, false);
}
});