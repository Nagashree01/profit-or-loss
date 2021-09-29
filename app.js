var intialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var calculateBtn =document.querySelector("#calculate-btn");

var output = document.querySelector("#output");

function submitHandler(){
    var ip = Number(intialPrice.value);
    var qty = Number(stockQuantity.value);
    var cur = Number(currentPrice.value);
    calculatePL(ip,qty,cur);
}

function calculatePL(initial,quantity,current){
    if(initial >current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/initial)*100;
         showOutput('The loss is '+loss+ ' and the loss percentage is '+lossPercentage+'%');
    } else if(current > initial ){
        var profit = (current - initial) * quantity;
        var profitPercentage= (profit/initial)*100;
        showOutput('The profit is '+profit+ ' and the profit percentage is '+profitPercentage+'%');

    } else {
        showOutput("No pain No gain and No gain No pain");

    }
}

function showOutput(message){
    output.innerHTML = message;
}

calculateBtn.addEventListener('click', submitHandler);