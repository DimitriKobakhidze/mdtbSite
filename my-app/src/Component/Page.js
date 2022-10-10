import React from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

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
  {id:37,name:"Western"}
]
export default function Page(props){
    const {id} = useParams()
    const {name} = useParams()
    const [data,setData] = React.useState([])
    const [pageNumber,setPageNumber] = React.useState(1)
    React.useEffect(() =>{
        fetch(name ? props.url.replace("query=",`query=${name}`) : props.url.replace("genres=",`genres=${id}`).replace("page=1",`page=${pageNumber}`))
        .then(res => res.json())
        .then(data => {
          setData(data.results)
        })
      },[id,pageNumber,props.url,name])
    React.useEffect(() => setPageNumber(1),[id,name])
    console.log(data)
    return(
        <>
            {data.length > 0 ?
            <>
                <h1 className="page-name">{id ? genresData.filter(item => item.id == id)[0].name : name ? "You Are Searching" :"Popular Now"}</h1>
                <div className="items-container">
                    {data.map((item,id) => <Card key={id} data={item}/>)}    
                </div>

                {!name &&
                    <div className="change-page-div">
                        <div className="prev-page" onClick={() => {setPageNumber(prev => prev - 1 > 0 ? prev - 1 : 1);window.scrollTo(0,0)}}>Previous Page</div>
                        <div className="next-page" onClick={() => {setPageNumber(prev => prev + 1);window.scrollTo(0,0)}}>Next Page</div>
                    </div>
                }
            </>
            : <h1 style={{color:"#ce3536"}} className="page-name">Nothing Found</h1>
            }
        </>
    )

}