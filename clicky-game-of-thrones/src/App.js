import React from 'react';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import Header from "./components/Header";
import characters from "./characters.json";
import characterArr from "./characterArr.json";
import Container from 'react-bootstrap/Container'
import './App.css';

class App extends React.Component {
  state = {
    characters,
    score: 0,
    topScore: 0
  };

  shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
  }
  
  // updateCharArr = (id) => {
    
  // }

  handleClick = (event) => {
    event.preventDefault();
    for (var i = 0; i < this.state.characterArr.length; i++) {
      const characterId = this.state.characterArr[i].id
      const id = parseInt(event.currentTarget.id)
      if (id === characterId) {
        this.setState({
          characterArr: this.state.characterArr.splice(i, 1)
        })
      }
      console.log(this.state.characterArr)
    }
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
              <div onClick={this.handleClick} 
              id={character.id} key={character.id}>
                <PictureCard
                  name={character.name}
                  image={character.image}
                />
              </div>
            ))}
          </Wrapper>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
