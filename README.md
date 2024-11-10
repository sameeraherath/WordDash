# Word Guessing Game

A fun and interactive word guessing game where players have 10 minutes to guess the hidden word. Players can request hints to help them guess the word, but each hint reduces their score. If the player guesses the word correctly or runs out of time, the game ends.

## Features

- **Timer**: Players have 10 minutes to guess the word.
- **Guesses**: Players start with 5 guesses. Additional guesses are earned by using hints.
- **Hints**: Each hint reduces the player's score by 10 points, and provides a clue about the hidden word.
- **Scoring**: Players start with 100 points. Using hints deducts points, while incorrect guesses don’t affect the score.
- **Sound Effects**: Correct and incorrect guesses, as well as hints, trigger sound effects to enhance the experience.

## Technologies Used

### Frontend:

- **React.js**: Used for building the user interface.
- **TailwindCSS**: For styling the components and providing a clean, responsive design.
- **Framer Motion**: For smooth animations and transitions within the app.
- **Howler.js**: For managing and playing sound effects like correct or incorrect guesses and hints.
- **Axios**: For making API requests to the backend to fetch words and handle game logic.
- **Lucide Icons**: For adding icons to the user interface.

### Backend:

- **Node.js with Express**: For building the REST API to handle game logic and word retrieval.
- **MongoDB**: For storing words and hints used in the game.
- **Mongoose**: For interacting with MongoDB, using a schema-driven approach.

### Deployment:

- **Frontend**: Vercel - Used to deploy the React frontend for easy and fast deployment.
- **Backend**: Heroku - Hosting the backend API for production deployment.
- **MongoDB**: MongoDB Atlas - Cloud-based MongoDB service for storing game data.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/sameeraherath/WordDash.git

```
