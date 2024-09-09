const product = {
    name: "meat",
    price: "120",

    applyDiscount: function(discountPercentage){
        const discountAmount = (this.price * discountPercentage) / 100;
        this.price -= discountAmount;
        console.log(`Знижка: ${discountPercentage}%\n Ціна після знижки: ${this.price.toFixed(2)}грн`);
    }
};

product.applyDiscount(30);




