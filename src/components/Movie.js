import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from "./movie.module.css";

const Movie=({movieID,coverImg, title, year,summary, genres})=>{

    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${movieID}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((genre)=>{
                    return (<li key={genre}>{genre}</li>);
                    })}
                </ul>            
            </div>
        </div>);
}

Movie.propTypes = {
    movieID : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;