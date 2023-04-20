import axios from 'axios';
import { Component, useState } from 'react';

import './App.css';

import BeerCard from './BeerCard';

class App extends Component {

  constructor() {
    super()

    this.state = {
      arrayOBeer: [],
      likedBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=80').then(res => {
      const arrayOBeer = res.data
      this.setState({ arrayOBeer: arrayOBeer })

    })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <ol>{this.state.arrayOBeer.map((beer, index) => {
            return (
              <BeerCard key={index} name={beer.name} image_url={beer.image_url} first_brewed={beer.first_brewed} tagline={beer.tagline} abv={beer.abv} description={beer.description} />
            )
          })}</ol>
        </header>
      </div>
    );
  }
}


export default App;
