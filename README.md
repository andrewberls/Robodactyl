# Robodactyl Escape  
### Group G8, CS48 Winter 2012  
* Andrew Berls
* Billy Galarpe
* Bryce Filler


## Build Instructions  
As JavaScript is a scripting language hosted in a browser, there are no build/compilation instructions for the project. There are no restrictions on OS, and necessary libraries are included in the source files. The only requirement is a browser with JavaScript enabled and support for the HTML5 canvas element. Current versions of Firefox, Chrome, Safari, and Opera support canvas, as well as Internet Explorer 9+. Opening the index.html file in a browser will begin the game process.


## Controls  
* Enter: make menu selection
* Arrow keys: move
* Spacebar: fire


## Gameplay  
As the RoboDactyl, your only objective is to survive! You will be attacked by a variety of enemies, and you must fight your way to the end of each level and escape the lab!

### Powerups  
There are a number of powerups and enhancements that can be collected during the course of a level.  
* __RageDactyl__: A temporary "rage" enhancement for the player. Flying into enemies will kill them for a short period of time. Icon: red smiley  
* __Health__: Gives one health point to the player, to the maximum of five. Icon: heart  
* __Extra Life__: Gives one life to the player, to the maximum of three. Icon: pterodactyl  
* __Shield__: Protects the player from taking damage for a maximum of two shots. Icon: shield  


## Known Bugs  
* Due to the nature of the collision box model for the player, a collision with a block or item in the upper right corner may be registered even though it does not appear to be touching the sprite