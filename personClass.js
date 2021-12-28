//Person class is created and methods to get college,stream and hometown is created
class Person{
    constructor(name, age, gender, profession, company, hometown, college, stream){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.profession = profession;
        this.hometown = hometown;
        this.college = college;
        this.stream = stream;
    }
    
    getcollege(){
        return this.college;
    }
    
    getstream(){
        return this.stream;
    }
    
    gethometown(){
        return this.hometown;
    }
    
}

var person_1 = new Person ("Alex" , "25",  "Male" ,"Apple" , "Software Developer", "Chennai", "XYZ", "EEE" );
var person_2 = new Person ("Anitha" , "24",  "Female" ,"Google" , "Software Developer", "Bangalore", "ABC", "EEE" );
console.log(person_2.getcollege());
console.log(person_1.getstream());
console.log(person_2.gethometown());

// Output:
// ABC
// EEE
// Bangalore
