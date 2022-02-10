document.getElementById('diposit-btn').addEventListener('click', function () {
    // get diposit from input
    const getDiposit = document.getElementById('input-diposit');
    const newDipositText = getDiposit.value;

    // convert input diposit value
    const convertNewDiposit = parseFloat(newDipositText);

    // call the previous value where show balance
    const preveousdipositTex = document.getElementById('diposit-balance');

    // get previous amount where show the balance
    const preveousDipositAmount = preveousdipositTex.innerText;

    // convert previous diposit value
    const converPreveousAmount = parseFloat(preveousDipositAmount);


    // total amount
    const newDipositTotal = convertNewDiposit + converPreveousAmount;

    preveousdipositTex.innerText = newDipositTotal;


    // call the current balance
    const currentBlance = document.getElementById('diposit-total');
    const newBlance = currentBlance.innerText;
    // convert current balance
    const converNewBlance = parseFloat(newBlance);
    // sum & call the total balance
    currentBlance.innerText = converNewBlance + convertNewDiposit;
    // clear the diposit input field
    getDiposit.value = '';
    
    
});

// withdraw balance
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    const newWithdraw = document.getElementById('input-widthdraw');
    const newWithdrawAmount = newWithdraw.value;
    //convert input new withdraw 
    const convertNewWithdraw = parseFloat(newWithdrawAmount);

    // call current withdraw
    const previousWithdraw = document.getElementById('withdraw');
  // set current withdraw
    const currentWithdraw = previousWithdraw.innerText;
    //convert current withdraw
    const converCurrentWithdraw = parseFloat(currentWithdraw);

    // total current withdraw + previous withdraw
    const totalWithdraw = converCurrentWithdraw + convertNewWithdraw;

    // set total withdraw
    previousWithdraw.innerText = totalWithdraw;

    // minus total balance
    const currnetTotalBalance = document.getElementById('diposit-total');
    // set current total balance
    const totalAmount = currnetTotalBalance.innerText;
    // convert total ammount
    const convertTotalAmount = parseFloat(totalAmount);

    // update balance
    currnetTotalBalance.innerText = convertTotalAmount - convertNewWithdraw;

    newWithdraw.value = '';
})