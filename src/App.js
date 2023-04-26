import axios from 'axios';
import { Component } from 'react';
import './App.css';
import BeerCard from './BeerCard';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfBeer: [],
      likedBeer: []
    }
  }
  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=80').then(res => {
      const arrayOfBeer = res.data
      this.setState({ arrayOfBeer: arrayOfBeer })

    })
  }
  render() {
    return (
      <div className="Beer-Box" >
        {this.state.arrayOfBeer.map((beer, index) => {
          return (
            <BeerCard key={index} name={beer.name} image_url={beer.image_url} first_brewed={beer.first_brewed} tagline={beer.tagline} abv={beer.abv} description={beer.description} />
          )
        })}
      </div>
    );
  }
}
export default App;
