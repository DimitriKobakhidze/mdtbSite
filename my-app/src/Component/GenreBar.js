import React from "react"
import { Link } from "react-router-dom"

export default function GenreBar(props){

    return(
        <nav className="genre-nav">
            <ul>
                {props.data.map((item,id) =>{
                    return <li key={id}><Link to={`/genre/${item.id}`} className="nav-link">{item.name}</Link></li>
                })}
            </ul>
        </nav>
    )
}