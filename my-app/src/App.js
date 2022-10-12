import React from "react";
import MainHeadeR from "./Component/MainHeader";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Page from "./Component/Page";
import GenreBar from "./Component/GenreBar";
import Details from "./Component/Details";

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

const popularUrl = "https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1"
const searchingUrl = "https://api.themoviedb.org/3/search/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&query="
const genreUrl = "https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=&page=1"

function App() {

  const [searchUrl,setSearchUrl] = React.useState(localStorage.getItem("movieName") || "")


  function changeSearchUrl(someText){
    setSearchUrl(someText)
  }

  return (
      <Router>
        <MainHeadeR changeSearchUrl={changeSearchUrl}/>
        <GenreBar data={genresData} />
        <Routes>
          <Route path="/" 
            element={
              <Page
                url = {popularUrl}
              />
            } 
          />
          {searchUrl &&
            <Route path="/search/:name" 
              element={
                <Page
                  url = {searchingUrl}
                />
              } 
            />
          }
       
          <Route path={`/genre/:id`}
            element={
              <Page
                url = {genreUrl}
              />
            }
          />
          <Route path="/details/:nameDetail" 
            element={
              <Details />
            }
          />
  
        </Routes>
      </Router>
  );
}

export default App;
