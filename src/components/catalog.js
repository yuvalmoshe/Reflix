import React, { Component } from 'react';
import '../styles/catalog.css'
import Movie from './movie';


class Catalog extends Component {
constructor () {
    super()
    this.state = {
        text: "",
        
    }
}

// componentDidMount = () => {

// } 
updateText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

    renderRentedMovies = () => {

        return this.props.movies.map(movie => {// map is a loop!!!!!!
            if (movie.isRented === true && movie.title.toLowerCase().includes(this.state.text.toLowerCase())) { // תציג לי רק את הסרטים השכורים
                // וגם תבדוק את הכותרת של הסרט "בטקסט בוקס" אם היא
                return (
                    <Movie movie={movie} key={movie.id} onclick={this.props.removeMovie} ></Movie> // מציג את הסרט 
                )
            }

        })

    }

    getAllMovies(){
        return this.props.movies.map(m => { // לולאה של הסרטים
            if(m.title.toLowerCase().includes(this.state.text.toLowerCase())){ //אם הכותרת של הסרט כוללת את הטקטס שבתוך הטקסט בוקס  אז
                return ( // מציג את הסרט על המסך
                <Movie movie={m} key={m.id} onclick={this.props.addMovie}/>
            )
            }
    })
    }
 

    render() {
        return (
            <div>
               
                <h4 className="money">Budget:${this.props.budget}</h4>
                <input className="search-input" type="text" placeholder="Search" 
                        value={this.state.text} onChange={this.updateText}/>
                
                
                <h4 className="rented-text">Rented:</h4>
                {this.renderRentedMovies()}
                <hr></hr>
                <div>

                    <h4 className="catlog-text">Catlog:</h4>
                    <div className="flix-movies">
                        {this.getAllMovies()}

                    </div>
                </div>
            </div>
            
        )

        //     <div className="user-flex">
        //     {this.props.user ? this.props.user.name : ""}
        // </div>


    }
}

export default Catalog;
