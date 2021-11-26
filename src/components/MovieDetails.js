// NPM Modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


const MovieDetails = () => {
    const [individualMovie, setIndividualMovie] = useState({})
    const movieID = useParams()
    // console.log(movieID) console logs the endpoint of the URL (as an object with movieID in it), making it accessible to us

    const apiKey = "bfb23e9c017a2be83f91472023334cb6"
    // const apiKey = "f012df5d63927931e82fe659a8aaa3ac"

    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID.movieID}`,
            params: {
                api_key: `${apiKey}`,
            },
        }).then((response) => {
            setIndividualMovie(response.data)

        })
    }, [movieID.movieID])

    

    // return (
    //     <div className="poster">
    //         <div className="description">
    //             <h2>{individualMovie.original_title}</h2>
    //             <h3>{individualMovie.tagline}</h3>
    //             <p>{individualMovie.overview}</p>
    //         </div>
    //         <div className="poster-image">
    //             <img src={`https://image.tmdb.org/t/p/w500/${individualMovie.poster_path}`}
    //                 alt={`Movie poster for ${individualMovie.original_title}`}
    //             />
    //         </div>
    //     </div>
    // )
    // Below is the same thing. just destructured

    const { original_title, tagline, overview, poster_path } = individualMovie;
    return (
        <div className="poster">
            <div className="description">
                <h2>{original_title}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
            </div>
            <div className="poster-image">
                {
                    individualMovie ?
                    (
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={`Movie poster for ${original_title}`}
                        />

                    ) : null
                }
            </div>
        </div>
    )
}

export default MovieDetails;