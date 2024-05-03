import { useState } from "react"

    function Movie() {
        const [movies, setMovies] = useState([])


        const URL = "https://swapi.dev/api/films/?format=json"

        async function makeRequest() {
            const response = await fetch(URL);
            const data = await response.json();

            setMovies(data.results)
        }

        return (

            <div className="">

                <button onClick={makeRequest}>Clickme</button>

                {movies.map((item) => (
                    <div key={item.title} className="">
                        <h5>{item.title}</h5>
                        <p>{item.opening_crawl}</p>
                    </div>
                ))}
            </div>
        )

    }

export default Movie;