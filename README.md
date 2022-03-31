# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Krises Maskey**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/wind-shadow-course

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/rKODrrJ.gif)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    i.   javascript.info: Used to understand Generic javascript syntax

    ii.  w3Schools: Used to understand Generic javascript, html, css syntax

    iii. StackOverflow: Used to understand syntax and ways to implement certain functions


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I faced was understanding the given code and implementing some of the additional features mentioned in the rubric. As I am new to Javascript I couldn’t just copy paste the given code, it took me some time to understand the use cases of certain functions and its syntax. Likewise, implementing the timer was also an exhausting process for me as I wanted the timer to have the following features,

    i.   It should be visible to the player
    ii.  It would end the game if it hit 0 and reset at the start of each round
    iii. The user will have 10 second to put their guess

Firstly, it took time to figure out the syntax for dynamically changing html text, but I found the answers on StackOverflow which worked. Secondly, calling the timer object and decrementing the time remaining variable did not work for me as multiple timer objects seemed to initialize after resetting at the start of each round. Hence, after careful debugging I eventually fixed this by using clearInterval() immediately before starting the new timer for the next round. Finally, to give the user 10 seconds while stopping the timer until the sounds were done playing was another tiresome process. Initially, I expected a delay variable would work to stop the timer until the sound was done playing, but this caused the same problem of multiple timers being initiated and counting the remaining time at once. However, by googling a bit I found a post about creating the setTimeout() function that is recursively called a secondary setTimeout() function, where the primary one would have a delay equal to the longest note and the second one to have a 1 second delay. This fixed the issue and my code worked! 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

As this was my first time learning Javascript to make websites and work on webpages, it was interesting to see how we can create fun web games that run on the user's end. I am curious to see how we can integrate the things taught in class with such projects in the real world. Specifically, I am keen on knowing more about frontend/backend and different frameworks like NodeJS, AngularJS, Express, AWS, MongoDB, D3.js and React. Similarly, I also read an article about Web 3.0 and the concept of decentralizing web, so I also want to know how all these existing web development tools will integrate with Web 3.0 and what new frameworks would be required? Yet, this prework project provided me with an introduction to web development and I hope to learn the nitty gritty of Web Development through this Internship.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time to work on this project, I would probably try implementing other optional features to get started with. Then I would want to refactor my code and clean it to be as efficient as possible, also adding comments/ and following naming conventions with variables so my code would be easier to understand. Similarly, I believe this Game would be ideal for kids aged 2 to 7 and would design it accordingly. I would like to customize the buttons according to different children's lullabies, nursery rhymes, melodies such that it helps them recognize colors, sound and play the melodies of their choice. I would want the Game to be like an interactive Akai with colors that help them learn colors, sounds, music, melodies, notes and many more. Yet, this would require an already existing database of each note, children lullabies, music and a way to manually figure out/create a program to parse the sounds, which would take time. 




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Krises Maskey]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
