let prices = [45, 60, 75, 30, 90, 25]

for  (let i = 0; i < prices.length; i++) {
  if (prices[i] > 50) {
    prices[i] = prices[i] = 0.85;
  }
}
console.log("updated prices:", prices);