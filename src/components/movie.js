import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/movie.css'


class Movie extends Component {

    clickFunc = ()=> {
       this.props.onclick(this.props.movie) 
    //    this.props.removeBudget() //removeBudgetמפעילה את הפונקציה   
    }

    button = () => {
        return this.props.movie.isRented ? "-" : "+";
    }


    render() {
        return (
                        <div className="flex-img">
                        {/* {this.props.movie.title} */}
                            <button className="icon-add" onClick={this.clickFunc}>{this.button()}</button>
                            <Link to={'/movies/' + this.props.movie.id}>
                                <img src={this.props.movie.img} alt="Smiley face" height="200" width="200" />
                            </Link>
                        </div>
        )
    }
}

export default Movie;
