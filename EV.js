
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
            return this.speed -5
        }}

        
class EV extends Car{
            constructor(make,speed,charge){
                super(make,speed);
                this.charge= charge;
            }
            // Create EV class extending Car with additional charge property.
            chargeBattery(){
                const basecharge= charge
                let charge= chargeTo 
                }
            //Implement chargeBattery method in EV class}
    calculateacceleration(){
                this.speed +20 
                this.charge-1
                console.log(`Tesla going at:  ${this.speed}km/h, with a charge of ${this.charge}%`);
                }}
            //Override accelerate method in EV class to adjust speed and charge. 
            
            
            
let Tesla = new EV ('Tesla',120,22)  
    Tesla.calculateacceleration()//Test EV class methods with different operations
                
