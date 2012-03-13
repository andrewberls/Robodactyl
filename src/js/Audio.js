/*
    File: Audio.js
    Description: Initialize audio variables to be used in game
    Ex usage: themeSong.play()
*/

/* MUSIC
/----------------------------------*/
var level1_music = new Audio("audio/level1_music.ogg");
var level2_music = new Audio("audio/level2_music.ogg");
var level3_music = new Audio("audio/level3_music.ogg");


/* WEAPONS
/----------------------------------*/
// Player
var player_fire = new Audio("audio/player_fire.ogg");
var rage_fire = new Audio("audio/rage_fire.ogg");
// Level 1
var scientist_fire = new Audio("audio/enemy_fire.ogg");
// Level 2
var hunter_fire = new Audio("audio/hunter_fire.ogg");
var turret_fire = new Audio("audio/turret_fire.ogg");



/* HURT/DEATH
/----------------------------------*/
// Player
var player_hurt = new Audio("audio/player_hurt.ogg");
var player_death = new Audio("audio/player_death.ogg");
var player_respawn = new Audio("audio/respawn.ogg");
// Scientist
var scientist_death1 = new Audio("audio/scientist_death1.ogg");
var scientist_death2 = new Audio("audio/scientist_death2.ogg");
var scientist_death3 = new Audio("audio/scientist_death3.ogg");
// Hunter
var hunter_death = new Audio("audio/hunter_death.ogg");

/* POWERUPS
/----------------------------------*/
var health_powerup = new Audio("audio/health.ogg");
var life_powerup = new Audio("audio/life.ogg");
var rage_activate = new Audio("audio/rage_activate.ogg");
var shield_activate = new Audio("audio/shield_activate.ogg");
var shield_hit = new Audio("audio/shield_hit.ogg");
var shield_deactivate = new Audio("audio/shield_deactivate.ogg");