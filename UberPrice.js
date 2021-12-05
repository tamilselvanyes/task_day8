class UberPrice{
    constructor(name, pickup_place, drop_place, distance, start_time, end_time, time_taken, rain){
        this.name = name;
        this.pickup_place = pickup_place;
        this.drop_place = drop_place;
        this.distance = distance;
        this.start_time = start_time;
        this.end_time = end_time;
        this.time_taken = time_taken;
        this.rain = rain;
    }
    
   getPrice(){
       //two slabs of calculations 1. >10 kms (20rs/km) 2. <10kms (15rs/km)
       var minimum_cost = 30;
       var price;
       if(this.distance >= 10){
           // calculation varying if weather is bad 
           // if rain there will be an extra 20% 
           if(this.rain){
               
               price = minimum_cost + this.distance * 1.2 /*rain*/ * 20;
               console.log("Price:" +price.toFixed(2) );
               
           }else{
               price = minimum_cost + this.distance * 1 /* no rain*/ * 20;
               console.log("Price:" +price.toFixed(2) );
               
           }
           
       }else{
           if(this.rain){
               price = minimum_cost + this.distance * 1.2 /*rain*/ * 15;
               console.log("Price:" +price.toFixed(2) );
               
           }else{
               price = minimum_cost + this.distance * 1 /*no rain*/ * 20;
               console.log("Price:" +price.toFixed(2) );
               
           }
           
       }
   }
    
}

var bill_1 = new UberPrice ("Alex" , "Adayar",  "Koyambedu" ,"17.7" , "08:00", "08:30", "30", false);
var bill_2 = new UberPrice ("Anitha" , "Besant Nagar",  "Marina" ,"7.4" , "18:15", "18:37", "22", true );

bill_1.getPrice();
bill_2.getPrice();


// Output:
// Price:384.00
// Price:163.20
