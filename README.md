# SweetBeats
SweetBeats is a basic interactive game-like web application designed to help beginner musicians experiment with music creation tools. This project was created by Jacob Mass, Alex Harvey, and Angel Lopez, as part of our research project for CEN4721 (Human Computer Interaction)

#### Table of Contents
1. [Introduction](#introduction)
2. [Key Features](#key-features)
3. [Testing](#testing)
4. [Install and Run](#install-and-run)
5. [Contributing](#contributing)
6. [License](#license)
7. [Acknowledgements](#acknowledgements)

## Introduction
SweetBeats aims to provide a user-friendly and accessible environment for those interested in music creation. It is designed to be smaller in scope than a full music production tool like Garage Band, making it more approachable for beginners. 

As part of our HCI project, we are performing A/B Tests for two separate design ideas. These two designs differ in terms of the physical, tactile user interaction required for track manipulation. 

We experiment with a drag-and-drop-based interface, where instrument patterns can be likened to "blocks" that can be placed on either the first meeasure or second measure of the track loop. We also propose an "toggle-based" interface, where two-sided buttons double as a method to 'toggle' patterns over the first and second measures, as well as indicators for what tracks are currently playing over the loop.


## Key Features
We have outlined a set of key features that we expect the application to support, throughout both designs.

### Instrument Navigation 
- User can navigate a panel of instrumental patterns, and pick out instruments to use.

### Track Manipulation 
- Users can easily add and remove tracks from either measure of the track loop (regardless of design differences).

### Chord Progression Manipulation 
- User is able to change the chord progression of the track loop over both measures.

## Testing

We first conducted a set of usability tests to ensure that our original designs were usable. Next, after confirming that our key functionalities were implemented correctly and could be used by an unexperienced user, we began conducting A/B tests with the two designs. 

For these A/B tests, We gathered 12 participants, with half being exposed to design A, and the rest being exposed to design B. We collected metrics such as task completion time, and total error count, and added an additional task meant for us to evaluate how well we support our overall system goal (to provide an easy-to-use music creation environment for beginners, with a decent degree of complexity).

We perform t-tests for all of our quantitative data points, and perform qualitative analysis of our test-session transcripts to identify major themes and opinions shared by the user-base with respect to how good/usable/fun our application is. These findings, and the conclusions we draw from them, are presented in our final deliverable for the class.

## Install and Run
In order to download, install, and run this application locally, you can perform the following steps (Windows)

1. Clone the repository
```bash
git clone https://github.com/angel1254mc/SweetBeats-MVP.git
```
2. travel to the project directory
```bash
cd SweetBeats-MVP
```

3. Install the required dependencies with NPM (if you don't have NPM, you will need to install [NodeJS](https://nodejs.org/en)
```
npm install
```
4. Finally, run the development server using the following command
```
npm run dev
```

In order to access design 1, go to [http://localhost:3000](http://localhost:3000). 

To access design 2, you will need to instead travel to [http://localhost:3000/home2](http://localhost:3000/home2)

## Contributing

As of right now, contributions are closed to project team members only. However, we are open to pull requests from other developers, and these might be reviewed and added after the project has been finalized.

## License
This project is licensed under the MIT License. Don't ask me what the hell that means because I have no idea.

## Acknowledgements
Jacob Mass for the project idea, interface design, and making the music!
Alex Harvey for helping develop the interface
Angel Lopez for helping develop the interface
The Developers behind NextJS and ToneJS 🙏
