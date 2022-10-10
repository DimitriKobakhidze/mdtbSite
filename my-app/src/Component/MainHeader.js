import {AiOutlineSearch} from "react-icons/ai"
import React from "react"
import { Link } from "react-router-dom"
import homeLogo from "../Images/homePage.png"


export default function MainHeadeR(props){
    const [userInput,setUserInput] = React.useState({movieName:""})

    const searchMovie = (movieName) =>{
        if(movieName){
            localStorage.setItem("movieName",movieName)
            props.changeSearchUrl(movieName)
        }
    }

    const inputHanlder = (e) =>{
        setUserInput(prev =>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    return(
        <header className="main-header">
            <Link to="/" className="home-page-link">
                <img src={homeLogo} />
                <span className="home-page-text">
                    <span style={{color:"#ce3536",fontSize:"20px"}}>HOME</span>
                    <span style={{color:"#2b70a8",fontSize:"20px"}}>page</span>
                </span>
            </Link>
            <div className="search-bar">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Movie search..."
                    onChange={(e) => inputHanlder(e)}
                    name="movieName"
                    value={userInput.movieName}
                />
                <Link to={userInput.movieName ? `/search/${userInput.movieName}` : "/"} style={{textDecoration:"none",color:"white"}} onClick={() => searchMovie(userInput.movieName)}>
                    <AiOutlineSearch 
                        className="search-icon"    
                    />
                </Link>
            </div>
        </header>
    )
}