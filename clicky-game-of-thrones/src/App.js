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
    topScore: 0,
    display: "Click an image to begin!"
  };

  shuffle = arr => {
    return arr.sort(() => Math.random() - 0.5)
  }

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
        console.log(`Top Score: ${this.state.topScore}`);
      })
    }
    this.state.characters.forEach(char => {
      char.count = 0;
      console.log(`Character Count: ${char.count}`);
    })
    this.setState({
      score: 0,
      display: "You guessed incorrectly! Try and beat your top score!"
    });
    return true
  }
  
  handleClick = id => {
    this.state.characters.find((char, i) => {
      if (char.id === id) {
        if (characters[i].count === 0) {
          characters[i].count = characters[i].count + 1;
          console.log(`Count: ${characters[i].count}`)
          this.setState({
            score: this.state.score + 1,
            display: "You guessed correctly!"
          }, function() {
            console.log(`Score: ${this.state.score}`)
          })
          this.shuffle(this.state.characters);
          return true;
        } else {
          this.gameOver();
        }
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <Container>
          <Instructions display={this.state.display}/>
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
