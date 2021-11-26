import { Link } from "react-router-dom";

const Catalogue = ({ movies }) => {
    return (

        <ul className="catalogue">
            {
                movies.map((mov) => {
                    //   console.log(mov)
                    return (
                        <li key={mov.id}>
                            <Link to={`/movie/${mov.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                                    alt={` ${mov.original_title}`}
                                />
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Catalogue;

// BOHT OF THESE WORK, THE WAY BELOW IS JUST THE OLD WAY
// const Catalogue = (props) => {
//     return (

//         <ul className="catalogue">
//             {
//               props.movies.map((mov) => {
//                   // console.log(mov)
//                   return (
//                       <li key={mov.id}>
//                       <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                       alt={` ${mov.original_title}`}
//                       />
//                       </li>
//                       )
//                     })
//                 }
//         </ul>
//     )

// }