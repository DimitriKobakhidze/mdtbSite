import React from "react";
import { useLocation, useParams } from "react-router-dom";

const genresData = 
[
  {id:28,name:"Action"},
  {id:12,name:"Adventure"},
  {id:16,name:"Animation"},
  {id:35,name:"Comedy"},
  {id:80,name:"Crime"},
  {id:99,name:"Documentary"},
  {id:18,name:"Drama"},
  {id:10751,name:"Family"},
  {id:14,name:"Fantasy"},
  {id:36,name:"History"},
  {id:27,name:"Horror"},
  {id:10402,name:"Music"},
  {id:9648,name:"Mystery"},
  {id:10749,name:"Romance"},
  {id:878,name:"Science Fiction"},
  {id:10770,name:"TV Movie"},
  {id:53,name:"Thriller"},
  {id:10752,name:"War"},
  {id:37,name:"Western"},
  {id:10759,name:"Action & Adventure"},
  {id:10765,name:"Sci-Fi & Fantasy"},
  {id:10768,name:"War & Politics"},
  {id:10767,name:"Talk"},
  {id:10766,name:"Soap"},
  {id:10764,name:"Reality"},
  {id:10763,name:"News"},
  {id:10762,name:"Kids"},
]
const imgPrefix = "https://www.themoviedb.org/t/p/w220_and_h330_face"
export default function Details(props){
    const data = useLocation().state
    console.log(data)
    const properties = Object.keys(data)
    console.log(properties)
    const removeArray = ["backdrop_path","id","name","poster_path","video","adult"]
    removeArray.map(item =>{
        const x = properties.indexOf(item)
        properties.splice(x,1)
    })
    return(
        <>
            <h1 style={{color:"#2b70a8"}} className="page-name">{data.original_name || data.original_title}</h1>
            <div className="details-main-container">
                <div className="details-poster-div">
                    <img className="details-photo" src={`${imgPrefix}${data.poster_path}`} />
                </div>
                <div className="details-text-div">
                    {properties.map((item,id) =>{
                        if(item == "overview"){
                            return(
                                <div key={id}>
                                    <h2 className="details-text-header">Overview</h2>
                                    <p className="details-desc">{data.overview}</p>
                                </div>
                            )
                        }else if(item == "genre_ids"){
                            return(
                                <div key={id} style={{display:"flex",alignItems:"center"}} className="details-genre-list">
                                    <h2 className="details-text-header">Genre:</h2>
                                    {
                                        data.genre_ids.map((item,id) =>{
                                            const genre = genresData.filter(item2 => item2.id == item)
                                            return <h3 className="details-genre" key={id}>{genre[0].name},</h3>
                                        })
                                    }
                                </div>
                            )
                        }
                        else{
                            return(
                                <div key = {id} style={{display:"flex",alignItems:"center"}} className="details-genre-list">
                                    <h2 className="details-text-header">{item}:</h2>
                                    <h3 className="details-genre">{data[item]}</h3>
                                </div>
                            )
                        }
                    })}
                    <div style={{display:"flex",alignItems:"center"}} className="details-genre-list">
                        <h2 className="details-text-header">Rating:</h2>
                        <h3 className="details-genre">{data.vote_average}</h3>
                    </div>
                    <div style={{display:"flex",alignItems:"center"}} className="details-genre-list">
                        <h2 className="details-text-header">Vote Count:</h2>
                        <h3 className="details-genre">{data.vote_count}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}