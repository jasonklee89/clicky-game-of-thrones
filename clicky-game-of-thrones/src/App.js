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

  // Function that shuffles an array
  shuffle = arr => {
    return arr.sort(() => Math.random() - 0.5);
  };
  // Resets character count
  resetCount = () => {
    return this.state.characters.map(character => {
      return Object.assign({}, character, { count: 0 });
    })
  }
  // Updates character count
  increaseCount = (id) => {
    return this.state.characters.map(character => {
      if (character.id === id) {
        return Object.assign({}, character, { count: character.count + 1 });
      }
      return character;
    })
  }

  gameOver = () => {
    // Updates topScore if score is greater than topScore
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
        console.log(`Top Score: ${this.state.topScore}`);
      })
    }
    this.shuffle(this.state.characters);
    const newCharacters = this.resetCount();
    // Resets score to 0, and displays "incorrect" message
    this.setState({
      characters: newCharacters,
      score: 0,
      display: "You guessed incorrectly! Try and beat your top score!"
    }, function() {
      // alert(`reset`)
    })
    return;
  };
  
  handleClick = id => {
    // Matches clicked id with characters id in array
    this.state.characters.find((char, i) => {
      if (char.id === id) {
        // Adds 1 to characters count value if it = 0
        if (this.state.characters[i].count === 0) {
          const newCharacters = this.increaseCount(char.id);
          console.log(`${newCharacters[i].name} Count: ${newCharacters[i].count}`);
          // Shuffles image order
          this.shuffle(newCharacters);
          // Adds 1 to score and displays "correct" message
          this.setState({
            characters: newCharacters,
            score: this.state.score + 1,
            display: "You guessed correctly!"
          }, function() {
            console.log(`Score: ${this.state.score}`)
          })
          return true;
        } else {
          // If characters count value doesn't = 0, run gameOver function
          this.gameOver();
        }
      }
    })
  };

  render() {
    return (
      <React.Fragment>
        <Header score={this.state.score} 
          topScore={this.state.topScore} />
        <Container>
          <Instructions 
          display={this.state.display} />
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
    )
  }
};

export default App;
