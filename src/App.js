import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Version common JS
// require('bootstrap/dist/css/bootstrap.css');
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import logo from './logo.svg';
import affiche_film from './film-idiot.jpg';
import './App.css';

import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';




// COMPONENTS


class App extends Component {
  render() {

    var movieData = [
      ["Embrasse moi idot", "Vieux classique dont je n'ai même pas trouvé de synopsis", "film1.jpg", true],
      ["Un idiot à Paris", "France (1967) · Comédie · 1h30", "film2.jpg", false],
      ["Brodway idiot", "Je n'ai même pas trouvé de synopsis !", "film3.jpg", false],
      ["Les 3 idiots", "Du bollywood avec des idiots", "film4.jpg", true],
      ["L'idiot", "Fedor Dostoievsky. Comme son nom l'indique, ce film est une grosse bouse...", "film5.jpg", false]
    ];
    var movieList = [];
    var movieListByName= [];
    var films = 0;
    // var LastFilms = [];

    for(var i=0; i<movieData.length; i++){
      // burgerList.push(<Burger burgerName={burgerData[i]} />);
      movieList.push(
        <FicheFilm movieName={movieData[i][0]}
        movieDesc={movieData[i][1]}
        movieImg={movieData[i][2]}
        movieStar={movieData[i][3]} />
      );

      // que les titres
      movieListByName.push(movieData[i][0]);

      // nbr de films
      films++;
    }

    // les 3 derniers seulement
    var Last3Films = movieListByName.slice((movieData.length) -3, movieData.length);
    var Last3Films = Last3Films.join(",");

    return (
      <div id="wrapper">

        <HeaderComponent NbrFilms={films} Last3Films={Last3Films} />

        <div id="boit_a_films" className="main_col_center">
          {movieList}
        </div>

      </div>
    );
  }
}


class FicheFilm extends Component {

  render() {

    var bg_image = {
      backgroundColor: '#f46542',
      backgroundImage: `url(${this.props.movieImg})`
    };

    var bg_star = {
      backgroundImage: 'url(stars.png)'
    };

    if( this.props.movieStar == true ){
      var star = <div className="star" style={bg_star}></div>;
      // console.log(star);
    } else { var star = ''; }


    // backgroundImage: `url(${Background})`

    return (
      <Card>
        <div className="affiche"><div class="content" style={bg_image}></div></div>
        <CardBody>
          <CardTitle>{this.props.movieName}</CardTitle>
          <CardSubtitle>{this.props.movieDesc}</CardSubtitle>
          {star}
          <Button>Je veux le voir !</Button>
        </CardBody>
      </Card>

    );
  }
}



class TestComponent extends Component {
  render() {
    return (
      <div id="TestComponent">
        <h2>TestComponent</h2>
      </div>
    );
  }
}


class HeaderComponent extends Component {
  // SPECIAL POPUP
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }


  render() {
    return (
      <div id="HeaderComponent">
        <h1 className="main_col_center">Les meilleurs films du mois</h1>
        <h2 className="main_col_center">Je ne sais pas quoi mettre devant... 

        <Button id="Popover1" onClick={this.toggle}>
          {this.props.NbrFilms} film(s)
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Les 3 derniers films</PopoverHeader>
          <PopoverBody>{this.props.Last3Films}</PopoverBody>
        </Popover>

        </h2>

      </div>
    );
  }
}

/*
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  }
}
*/




// UN SEUL EXPORT DEFAULT PAR .JS pour le moment
export default App;
