
const moviesTitles = movies.map((movies) => {
    return movies.Title;
});

const ulContainer = document.getElementById("film-list");

const addMoviesToDom = (movies) => {
    
    const moviesArray = movies.map(movies => {

        const newLi = document.createElement("li");
        const newATag = document.createElement("a"); 
        const newImg = document.createElement("img"); 
        ulContainer.appendChild(newLi)
        newLi.appendChild(newATag)

        newATag.appendChild(newImg)
        const moviesPoster = movies.Poster; 
        const posterID = movies.imdbID; 
        newATag.setAttribute("href", "https://www.imdb.com/title/"+posterID);
        newImg.src = moviesPoster; 
        return newLi; 
})

    movies.forEach(movies => {
        console.log(movies.Title); 
})

}
addMoviesToDom(movies);



const radioButtons = document.getElementsByName("film-filter")

radioButtons.forEach(radioButtons => {  

    const handleOnEvent = (event) => {
        switch (event.target.value) {
            case "latest-films":
                filterLatestMovies();
                break
            case "avengers-films":
                filterMovies("Avengers");
                break
            case "xmen-films":
                filterMovies("X-Men");
                break
            case "princess-films":
                filterMovies("Princess");
                break
            case "batman-films":
                filterMovies("Batman");
                break
        }    
    };
    console.log(radioButtons.addEventListener("change", handleOnEvent));
})

const filterMovies = (wordInMovieTitle) => {
    const moviesFilterInput = movies.filter((movies) => {
        return movies.Title.includes(wordInMovieTitle);
    })
     ulContainer.querySelectorAll('li').forEach(movies => movies.remove());
     addMoviesToDom(moviesFilterInput);
}

const filterLatestMovies = () => {
    const latestMovies = movies.filter((movies) => {
        return movies.Year >= 2014;
        
    })
    ulContainer.querySelectorAll('li').forEach((movies) => movies.remove());
    addMoviesToDom(latestMovies)
}









