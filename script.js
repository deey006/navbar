const imgUrl = "https://image.tmdb.org/t/p/w1280"
async function fetchData () {
    const key = '5ed1d4b5f421c49ea74a0fef3ed53e55'
    const apiURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`;

    try {
        const response = await fetch (apiURL);
        const data = await response.json ()
        console.log(data)
    } catch (error) {
        alert('Error Occurred')
    }
}

fetchData()