class Circle {
    
    constructor (radius, color){
        this.radius = radius;
        this.color = color;
    }
    
    setradius(radius){
        this.radius = radius;
        
    }
    
    getradius() {
      return (this.radius);
    }
    
    setColor(color){
        this.color = color;
        
    }
    
    getColor(){
        return (this.color);
    }
    
    getArea(){
        let Pi = 3.14;
        return (Pi * this.radius * this.radius);
    }
    
    getCircumference(){
        let Pi = 3.14;
        return (2 * Pi * this.radius);
    }
    
    toString(){
        return "Circle[radius =" +this.radius +",color =" +this.color + "]";
    }
}

var circle_1 = new Circle ( 2, "red");
console.log("Area:" +circle_1.getArea());
console.log("color:" + circle_1.getColor());
console.log("circumference"+circle_1.getCircumference());
circle_1.setradius(4);
console.log("New radius:" +circle_1.getradius())
console.log("New Area:"+circle_1.getArea());
console.log("toString"+circle_1.toString());
