/**Buy and sell of stock
 * you have prices array in which you have to extract maximum profit buy buying stock at "i th" day and selling at "i th" 
 * you have to return max Profit
 */

function maxProfit(prices){
    let maxProfit = 0, min = prices[0];
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i];
        }
        maxProfit = Math.max(maxProfit, prices[i]-min);
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
