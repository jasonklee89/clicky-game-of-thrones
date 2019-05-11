import React from 'react';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import Header from "./components/Header";
import characters from "./characters.json";
import Container from 'react-bootstrap/Container'
import './App.css';

class App extends React.Component {
  state = {
    characters,
    score: 0,
    topScore: 0
  };

  shuffle = arr => {
    return arr.sort(() => Math.random() - 0.5)
  }
  
  // updateCharArr = (id) => {
    
  // }

  handleClick = id => {
    this.state.characters.find((char, i) => {
      if (char.id === id) {
        console.log(char.id)
        console.log(id)
      }
    })
    this.setState({
      characters: this.shuffle(this.state.characters)
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Instructions />
          <Wrapper>
            {this.state.characters.map(character => (
                <PictureCard
                  handleClick={this.handleClick}
                  id={character.id} 
                  key={character.id}
                  image={character.image}
                />
            ))}
          </Wrapper>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
