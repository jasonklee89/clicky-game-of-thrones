## Clicky Game of Thrones!

### About / How to Use
* Welcome to Clicky Game of Thrones!  
* This is a simple memory card game created in React. 
* Don't click the same card twice, and try to beat your top score!

### Functionality
* When the game starts, each character's picture is rendered by mapping the data in characters.js to the PictureCard component
* Each character in characters.js holds their respective id, name, image link, and count
* Whenever a PictureCard is clicked, the code checks that the characters' count is 0
* If a characters' count is 0, then the code will add 1 to their count
* If the user clicks on a character whose count is not 0, then the code will run the game over function and reset the count of all the characters
* The code will also keep track of the users' current score
* If the users' current score is greater than the top score, then the top score will update to the current score upon game over

### Link to the Application
https://jasonklee89.github.io/clicky-game-of-thrones/

### Screenshot
![Alt text](/public/assets/images/screenshot/screenshot.png?raw=true "Optional Title")