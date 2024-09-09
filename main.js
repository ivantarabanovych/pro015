const circle = {
    _radius: 5,

    get area(){
        return Math.PI * Math.pow(this._radius, 2);
    },

    set radius(value){
        if (value < 0){
            console.error("Радіус кола не може бути від'ємним!");
            return;
        }

        this._radius = value;
    }
};

circle.radius = 3,14159;
console.log(circle.area);

circle.radius = 8.4;
console.log(circle.area);

circle.radius = -2;
console.log(circle.area);

