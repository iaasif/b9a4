/*function signature/sample */
function calculateMoney(ticketSale) {

    // You have to write your code here
    if (ticketSale < 0) {
        return "Invalid Number";

    }
    else {
        cashAfterSell = ticketSale * 120;
        careTakerSalary = 500;
        stafLunch = 400;
        // return ;
        return cashAfterSell - (careTakerSalary + stafLunch);
    }
}


// console.log(calculateMoney(-1)); 