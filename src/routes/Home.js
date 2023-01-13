import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import styles from "./home.module.css";

const Home=()=>{

  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies =async()=>{
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year",{method : "get"})).json();
    
    if(json.status ==="ok"){
      setMovies(json.data.movies);

    }
    setLoding(false);
  }
  useEffect(()=>{
    getMovies();
    
  },[])
  return (
    <div className={styles.container}>      
      {
        loding ? 
        <div className={styles.loader}>
          <span>loding...</span>
        </div> 
        : 
        <div className={styles.movies}>
          {movies.map((movie)=>{
            return (
              <Movie key={movie.id} 
                movieID={movie.id}                
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                year={movie.year}
                summary={movie.summary} 
                genres={movie.genres}/>
            );
          })}
        </div>
      }
    </div>
  );
}

export default Home;