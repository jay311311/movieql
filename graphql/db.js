 let movies = [
    {
        id:0,
        name: "star-wars",
        score:1
    },{
        id:1,
        name: "24-identities",
        score:4
    },
    {
        id:2,
        name: "alone",
        score:3
    },
    {
        id:3,
        name: "harry-potter",
        score:5
    }
];

export const getMovies = () => movies;

export const getById = () =>{
    const filteredMovies = movies.filter(movie=> id === movie.id);
    return filteredMovies[0]
}

export const deleteMovie =id =>{
    const cleanMovies = movies.filter(movie => movie.id !== id)
    if( movies.length > cleanMovies.length){
        movies =  cleanMovies;
        return true
    }else{
        return false
    }
}

export const addMovie = (name, score) =>{
    const newMovie ={
        id:`${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}