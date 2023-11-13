import axios from "axios"


export default async function fetcher(url) {
    const response = await axios.get((`https://api.themoviedb.org/3${url}?adult=false`),
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGZkYTFjMDhiODE1ZTZkMzU2NmYzYTQ5ZTBjYWE2ZCIsInN1YiI6IjY1MzkwYTcxMGZiMTdmMDEzOGZjY2I0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16Lq58HvoXoclQo_3BtMj_IAguqwpSGyUSDBfSDH1AE"
            }
        }
    )

    return response.data
}



