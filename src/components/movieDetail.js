import React, { Component } from 'react';
import '../styles/movieDetail.css'


class MovieDetail extends Component {

    
    render() {
        const movieId = this.props.match.params.id
        const movie = this.props.movies[movieId]
        console.log(movie)
        return (
            <div>
                <h2 className="title-year">{movie.title} ({movie.year})</h2>
                <img className="img-movieDetail" src={movie.img} alt="Smiley face" height="350" width="300" />
                <h5 className="descrShort-movieDetail">{movie.descrShort}</h5>
            </div>
            )
    }
}

export default MovieDetail;