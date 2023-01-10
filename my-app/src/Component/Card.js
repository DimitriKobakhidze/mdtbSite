import {useState} from "react"

import { Link } from "react-router-dom"
import LoadingElement from "./UI/LoadingElement"


const imgPrefix = "https://www.themoviedb.org/t/p/w220_and_h330_face"
export default function Card(props){
    const [loaded,setLoaded] = useState(false)

    return(
        <Link to={`/details/${props.data.original_name || props.data.original_title}`} state={{...props.data}} >
            <div className="item-element">
                <img onLoad={() => setLoaded(true)} src={`${imgPrefix}${props.data.poster_path}`}/>
                <h2 className="item-rating">Rating: {props.data.vote_average}</h2>
                {!loaded && 
                    <div className="wrapper">
                        <LoadingElement manualStyle={{width:"45px",height:"45px"}} />
                    </div>
                }
            </div>
        </Link>
    )
}
