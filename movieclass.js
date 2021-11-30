//Movie class take name, studio, rating.
class Movies { 
    //constructor
    constructor (name, studio, rating){
        this.movie_name = name;
        this.studio_name = studio;
        if(rating === undefined){
            this.movie_rating = "PG"
        }else{
        this.movie_rating = rating;
        }
    }
    //method to get the PG rated movies.
    getPGMovies (a) {
        let PG_movies_array =[];
        for(let i =0 ; i< a.length ; i++){
            if(a[i].movie_rating === "PG"){
              PG_movies_array.push(a[i].movie_name);
            }
        }
        return PG_movies_array;
        
    }
}
const movie_1 = new Movies ("Casino Royale" , "Eon Production" , "PG13");
const movie_2 = new Movies ("The Shawshank Redemption" , "Parmount Production" , "PG");
const movie_3 = new Movies ("Iron Man" , "Marvel studios" , "PG");

const movie_4 = new Movies ("Iron Man 2" , "Marvel studios" , "PG");
const movie_5 = new Movies ("Hacksaw Ridge", "MTV Entertainment studios", "G");
const movie_6 = new Movies ("XYZ", "Eon Production", "R");
//input array full of Movie instances
console.log(movie_1.getPGMovies([ movie_1, movie_2, movie_3, movie_4, movie_5, movie_6 ]));

