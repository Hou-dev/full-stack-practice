import React from 'react';
import './App.css';

class StarWars extends React.Component{
  constructor(){
    super()
    this.state={
      loaded: false,
      name: null,
      height: null,
      mass: null,
      image: null,
      homeworld: null,
      species: null,

    }
  }
  getNewCharacter(){
    const randomNumber = Math.round(Math.random() * 88)
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
          name: data.name,
          height: data.height,
          mass: data.mass,
          image: data.image,
          homeworld: data.homeworld,
          species: data.species,
          loaded: true,
      })
      console.log(data)
    })
  }
  render(){
    return(
      <div>
        {
          this.state.loaded &&
          <div>
            <img src={this.state.image} width="500" height="500" />
            <h1>Name: {this.state.name}</h1>
            <p>Height: {this.state.height} cm</p>
            <p>Mass: {this.state.mass} kg</p>
            <p>HomeWorld: {this.state.homeworld}</p>
            <p>Species: {this.state.species}</p>
          </div>
        }
        <button type="button" onClick={()=> this.getNewCharacter()} className="btn">Randomize Me</button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars></StarWars>
      </header>
    </div>
  );
}

export default App;
