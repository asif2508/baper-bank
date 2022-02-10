function getUserInput(userInput){
    let depositAmount = document.getElementById(userInput);
    // console.log(typeof(depositAmount.value));
    let dipositAmountNUm  = parseInt(depositAmount.value);
    depositAmount.value = ""

    return dipositAmountNUm;

}

function getPreviousBalance(balinput){
    let priviousbal = document.getElementById(balinput).innerText;
    let priviousbalNum = parseInt(priviousbal);
    return priviousbalNum;
}


document.getElementById("deposit").addEventListener("click", function(){
    // let depositAmount = document.getElementById("diposit-input");
    // // console.log(typeof(depositAmount.value));
    // let dipositAmountNUm  = parseInt(depositAmount.value);

    const dipositAmountNUm = getUserInput("diposit-input");

    // let priviousbal = document.getElementById("saving").innerText;
    // let priviousbalNum = parseInt(priviousbal);
    let priviousbalNum =getPreviousBalance("saving")

    let total = priviousbalNum + dipositAmountNUm;
    const showOff = document.getElementById("saving");
    showOff.innerText = total;
    // depositAmount.value = ""

    //balance ammount
    let balanceAmount = document.getElementById("balance");
    let balanceAmountNum = parseInt(balanceAmount.innerText);
    console.log(balanceAmountNum)
    console.log(typeof(balanceAmountNum))
    const totalBalance = balanceAmountNum + dipositAmountNUm;
    balanceAmount.innerHTML = totalBalance;
})

document.getElementById("withdraw").addEventListener("click", function(){
    // let withdrawAmount = document.getElementById("withdraw-input");
    // let withdrawAmountNum = parseInt(withdrawAmount.value);

    const withdrawAmountNum = getUserInput("withdraw-input")

    let withdrawbal = document.getElementById('withdraw-bal');
    // let withdrawbalNum = parseInt(withdrawbal.innerText);

    let withdrawbalNum = getPreviousBalance('withdraw-bal');

    // removing from balance 
    let balanceAmount = document.getElementById("balance");
    let balanceAmountNum = parseInt(balanceAmount.innerText);
    if(balanceAmountNum > withdrawAmountNum){
        const totalBalance = balanceAmountNum - withdrawAmountNum;
        balanceAmount.innerText = totalBalance;
        const totalwithdrawal = withdrawbalNum + withdrawAmountNum;
        withdrawbal.innerText = totalwithdrawal;
        // withdrawAmount.value = ""; 
    }
    else{
        alert("insufficient balance!");
        // withdrawAmount.value = "";
    }
})