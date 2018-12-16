import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/landing'
import Catalog from './components/catalog'
import MovieDetail from './components/movieDetail';


class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        { name: "Yuval", color: "red", rentedMovies: [] },
        { name: "Agam", color: "blue", rentedMovies: [] },
        { name: "Liel", color: "yellow", rentedMovies: [] },
        { name: "Ron", color: "green", rentedMovies: [] }
      ],
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      budget: 5

    }
  }

  addMovie = (movie) => { //פונקציה שמוגדר פרמטר-סרט
    const movies = [...this.state.movies] //משתנה "סרטים" ששווה למערך של הסרטים(מערך שלא משנה את המערך הקיים) בתוך הקונסטרקטור
    console.log(movie) //בדיקה-מה זה סרט
    //  לבדוק אם יש לי כסף 
    // ומשלמים 3$
    if (this.state.budget >= 3) {
      this.setState({
        budget: this.state.budget - 3 //שינוי של הכסף, 
      })

    for (let m of movies) { //לולה של כל סרט במערך של הסרטים
      if (m.id === movie.id) { //אם כל סרט שנבחר = לסרט קיים  
        m.isRented = true //  כל סרט במושכרים יהפוך לנכון
      }

    }
  } //end if

    // אם אין כסף לא בוחרים סרט
    if (this.state.budget - 3 <= 0) { //אם הכסף קטן מ-3 או שווה ל-0 
      alert("There is not enough money, and not allow the rental to happen")// אז תעיר לי
    }// נגמר התנאי

    this.setState({ movies: movies }, function () { //שינוי של הסרטים 
      console.log(this.state.movies);
    })
  }

  removeMovie = (movie) => {
    const movies = [...this.state.movies]
    for (let i in movies) {
      if (movies[i].id === movie.id) {
        movies[i] = {...movies[i]};
        movies[i].isRented = false;
      }
    }
    this.setState({
      movies: movies
    })
    this.setState({
      budget: this.state.budget + 3
    })

  }

  render() {
    return (
      <div className="app-container">
        <Router>
          <div className="App">
            <h4 className="reflix">REFLIX</h4>
            <div id="main-links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
            </div>
            <Route path="/" exact render={() => <Landing users={this.state.users} />} />
            <Route path="/catalog" exact render={() => <Catalog addMovie={this.addMovie} movies={this.state.movies} removeMovie={this.removeMovie} budget={this.state.budget} />} />
            <Route path="/movies/:id" exact render={({ match }) => <MovieDetail match={match} movies={this.state.movies} />} />
          </div>
        </Router>
      </div>
    );

  }
}

export default App;



// getSelectedUser(userName, props) {
//   for (let i = 0; i < this.state.users.length; i++) {
//     if (userName === this.state.users[i].name) {
//       return this.state.users[i];
//     }
//   }
//   props.history.push('/')

// }


{/* <Route path="/:userName" render={(props) => <Catalog movies={this.state.movies} user={this.getSelectedUser(props.match.params.userName, props)} />} /> */ }
{/* <Route path="movies/:id" exact render={() => <Movie />}/> */ }