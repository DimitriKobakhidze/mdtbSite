import { Link } from "react-router-dom"



const imgPrefix = "https://www.themoviedb.org/t/p/w220_and_h330_face"
export default function Card(props){
    return(
        <Link to={`/details/${props.data.original_name || props.data.original_title}`} state={{...props.data}} >
            <div className="item-element">
                <img src={`${imgPrefix}${props.data.poster_path}`} />
                <h2 className="item-rating">Rating: {props.data.vote_average}</h2>
            </div>
        </Link>
    )
}
