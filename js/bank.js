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


document.getElementById('diposit-btn').addEventListener('click', function () {
   
    // call the function input field
  const convertNewDiposit = getInputField('input-diposit');

    // function for field
  updateTotalField('diposit-balance', convertNewDiposit);
  
    // call the current balance
    const currentBlance = document.getElementById('diposit-total');
    const newBlance = currentBlance.innerText;
    // convert current balance
    const converNewBlance = parseFloat(newBlance);
    // sum & call the total balance
    currentBlance.innerText = converNewBlance + convertNewDiposit;
 
});

// withdraw balance
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    // call the function input field
  const convertNewWithdraw = getInputField('input-widthdraw');
  // call the function field
  updateTotalField('withdraw', convertNewWithdraw);

    // minus total balance
    const currnetTotalBalance = document.getElementById('diposit-total');
    // set current total balance
    const totalAmount = currnetTotalBalance.innerText;
    // convert total ammount
    const convertTotalAmount = parseFloat(totalAmount);

    // update balance
    currnetTotalBalance.innerText = convertTotalAmount - convertNewWithdraw;


})