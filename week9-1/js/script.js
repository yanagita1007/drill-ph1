const calculatePriceAfterTax = function(price,taxRate) {
    console.log(price + price*taxRate);
};

calculatePriceAfterTax(100, 0.08); // 108
calculatePriceAfterTax(150, 0.1); // 165