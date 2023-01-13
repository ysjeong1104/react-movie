import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail=()=>{
    const { id } = useParams();
    const [loding, setLoding] = useState(true);
    const [movie, setMovie] = useState({
        id : "",
        title : "",
        coverImg : "",
        genres : [],
        description : "",

    });
    const getMovieInfo=async()=>{
        const json = await ( await fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+id)).json()
        
        let obj ={};

        obj.id = json.data.movie.id;
        obj.title = json.data.movie.title;
        obj.coverImg = json.data.movie.medium_cover_image;
        obj.genres = json.data.movie.genres;
        obj.description = json.data.movie.description_full;
        setMovie(obj);
        setLoding(false);
    }
    useEffect(()=>{        
        getMovieInfo();
    });

    return (
        <div>
            {loding ? <h1>Loding...</h1>  : 
                <div>
                    <Link to="/">목록</Link>
                    <h1>{movie.title}</h1>
                    <div>
                        <img src={movie.coverImg} alt={id}/>
                    </div>
                    <div>
                        <ul>
                        {movie.genres.map((genre)=>{ return <li>{genre}</li>})}
                        </ul>
                    </div>
                    <div>
                        <p>
                            {movie.description}
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}
export default Detail;