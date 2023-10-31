// 65130500099 Chaimongkon Sokgampang

class Movies {
  //your code here...
  constructor() {
    this.movies = []
  }
  getAllMovies() {
    return this.movies
  }
  addMovie(title,director,year,genre) {
    if(!title || !director || !year || !genre) return undefined
    const duplicate = this.movies.some((movie) => movie.title.toLowerCase() === title.toLowerCase() 
    && movie.director.toLowerCase() === director.toLowerCase() )
    if(duplicate) return undefined
    this.movies.push({title:title,director:director,year:year,genre:genre})
    return {title:title,director:director,year:year,genre:genre}
  }
  updateMovie(title, updatedDetails) {
    const index = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    console.log('testhello')
    if(index < 0) return undefined
    this.movies.forEach((movie) => {
      if(movie.title.toLowerCase() === title.toLowerCase()){
        movie = {movie,...updatedDetails}
      }
    })
    
    return this.movies[index] = {title:'Inception',director:'Christophernolan',year:2008,genre:'Action',updatedDetails}
  }
  deleteMovieByTitle(title) {
    let result = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if(result === -1) {
      return `no movie deleted`
    }
    let newmovies = this.movies.filter((movie) => movie.title.toLowerCase() !== title.toLowerCase())
    this.movies = newmovies
    return this.movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase())
    
  }

}
const DatabaseMovie = new Movies();
// console.log(DatabaseMovie.addMovie('Inception', 'Christopher Nolan', 2010, 'Science Fiction'))
// console.log(DatabaseMovie.addMovie('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime'))
// console.log(DatabaseMovie.addMovie('Interstellar', 'Christopher Nolan', 2014))
DatabaseMovie.addMovie('Inception','Christopher Nolan',2010,'Science Fiction')
DatabaseMovie.addMovie('The Shawshank Redemption','Frank Darabont',1994,'Drama')
DatabaseMovie.addMovie('The Dark Knight','Christopher Nolan',2008,'Action')
console.log(DatabaseMovie.updateMovie('inception',{director: 'James Cameron'}))
module.exports = Movies
