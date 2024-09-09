const calculator = {
    add: function (a, b){
        return a + b;
    },

    subtract: function (a, b){
        return a - b;
    },

    multiply: function (a, b){
        return a * b;
    },

    divide: function (a, b){
        if (b === 0){
            return "Помилка ділення на 0"
        }

        return a / b;
    }
    
};

console.log(calculator.add (16, 4));
console.log(calculator.subtract (16, 4));
console.log(calculator.multiply (16, 4));
console.log(calculator.divide (16, 0));
console.log(calculator.divide (16, 4));