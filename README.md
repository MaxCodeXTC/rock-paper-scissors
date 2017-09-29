# Trello Board for Project 1: Rock, Paper, Scissors:
https://trello.com/b/XypuHNgI/rock-paper-scissors 

## Landing Page Idea:
![landing_page](https://user-images.githubusercontent.com/22715776/30994441-38eb05e6-a471-11e7-9f47-0bd9a8c796d1.png)

## Game Page Idea:
![game_page](https://user-images.githubusercontent.com/22715776/30994439-379b5fc4-a471-11e7-940b-6e4805a90231.png)


### Actual Landing page:
Click [here](https://miketheo423.github.io/rock-paper-scissors/) to see the landing page! Clicking the button on the bottom right will start the game!

### Approach:
I wanted to implement a way that players can choose their classes without being able to see what the other player chose.
To achieve this, I :
  - Linked the decisions to specific keypresses (Q,W,E for Player One and I,O,P for Player Two)
  - Made the images stay off-screen while the players made their choices
  - Implemented a countdown that disabled the ability to change class on keypress after 3 seconds
  - When the player wins a total of 3 rounds, an alert will display that will declare the winner and reload the page once the ok button is clicked
 
### Challenges:
  - Linking the ability to press keys to a countdown timer
  - Getting divs to have the correct classes at the right times for animation purposes (used toggle class at first, but should have been adding and removing classes)
  - Getting the countdown timer to display on every click (was only working for the first click then had to refresh page to get it to work again)
  - Getting the timing right for determining a winner after the collision animation played (used a setTimeout function to achieve this)
  
### Animations:
I used a variety of animations that were linked to classes. When specific events happened, such as player one winning the round, I used jquery to change the class of the winning hand to one with a winning animation. I also used JQuery to remove all of the animation classes whenever the countdown button was pressed so that the correct animation classes would be applied a the end of each round according to the outcome.

### Unsolved Issues:
I attempted to use a prompt() function in order to enter the player's names at the beginning of the game and have them be refleted in the header. I did get that to work, but it was affecting my ability to keep score. The player score would not change on a win of a round.
