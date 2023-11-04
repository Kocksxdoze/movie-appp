import axios from "axios"


export default async function fetcher(url) {
    const response = await axios.get((`https://api.themoviedb.org/3${url}`),
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODk3ODRiZjZkZDY0YjM1OTg1OWUxM2MxZTAyYjc4ZiIsInN1YiI6IjY1MzkwYTcxMGZiMTdmMDEzOGZjY2I0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uRJx4DycDZ1HnYGChzFThZVy2FKxZQ8DeNtudYP1wM"
            }
        }
    )
    return response.data
}



