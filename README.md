# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
-create the 3x3 game board in css
-modify square component to display a 3x3 layout of squares
-utilized width and flex-wrap to set the demensions of the 3x3 grid

- As a user, I can click on a square to mark it.
-created a varible function that allowed us to click the square and return the index of the array

- As a user, my partner can click on a square after me and see their mark.
-utilized variable "player" along with Modulo to differentiate players and alternate between X and O

- As a user, I can't click on a square that has already been marked.
-adding setPlayer after each boardUpdate if statement makes it so you can't override an X or an O already placed on the board

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
-created varible let "winner"
-included arrays of victory combinations

- As a user, I can't continue playing the game after the game has been won.
-added a return "you win" into the winner function to push to a new page that displays the message

- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.

- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
