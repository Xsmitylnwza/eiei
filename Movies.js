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
    let copymovie
    this.movies.forEach((movie) => {
      if(movie.title.toLowerCase() === title.toLowerCase()){
        copymovie = movie
      }
    })
    this.movies[index] = {...copymovie,...{...updatedDetails}}
    
    return this.movies[index]
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
module.exports = Movies
