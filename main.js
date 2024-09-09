const car = {
    brand: "AUDI",
    model: "A6",

    description: function(){
        return `Марка автомобіля: ${this.brand}\nМодель автомобіля: ${this.model}`;
    }
};

console.log(car.description());


