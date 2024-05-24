
console.log(`U22275330`)// U number
class Car{
        constructor(make, speed){
            this.make = make;
            this.speed = speed;
            console.log(`Make: ${make}`)
            console.log(`Speed: ${speed}`)
        }
        
        calculateacceleration(){
            return this.speed + 10 }
    
        calculatebrake(){
            return this.brake -5
        }

        }
        new class EV extends Car{
            constructor(make,speed,charge){
                super(make,speed);
                this.charge;
            }}// Create EV class extending Car with additional charge property.
