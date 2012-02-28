/*
    File: Audio.js
    Description: Initialize audio variables to be used in game
    Ex usage: themeSong.play()
*/

// Music
var themeSong = new Audio("audio/theme_soft50.ogg");

// Weapons
var player_fire = new Audio("audio/player_fire.ogg"); // Error
var rage_fire = new Audio("audio/rage_fire.ogg");
var enemy_fire = new Audio("audio/enemy_fire.ogg"); // Error

// Hurt/Kill
var player_hurt = new Audio("audio/player_hurt.ogg"); // Error
var player_death = new Audio("audio/player_death.ogg");
var player_respawn = new Audio("audio/respawn.ogg");
var enemy_death1 = new Audio("audio/enemy_death1.ogg");
var enemy_death2 = new Audio("audio/enemy_death2.ogg");
var enemy_death3 = new Audio("audio/enemy_death3.ogg");


// Powerups
var health_powerup = new Audio("audio/health.ogg");
var life_powerup = new Audio("audio/life.ogg");
var rage_activate = new Audio("audio/rage_activate.ogg");
var shield_activate = new Audio("audio/shield_activate.ogg");
var shield_hit = new Audio("audio/shield_hit.ogg"); // Error
var shield_deactivate = new Audio("audio/shield_deactivate.ogg");




/*
MP3 BACKUP
// Music
var themeSong = new Audio("audio/theme_soft50.mp3");

// Weapons
var player_fire = new Audio("audio/player_fire.mp3");
var rage_fire = new Audio("audio/rage_fire.mp3");
var enemy_fire = new Audio("audio/enemy_fire.mp3");

// Hurt/Kill
var player_hurt = new Audio("audio/player_hurt.mp3");
var player_death = new Audio("audio/player_death.mp3");
var player_respawn = new Audio("audio/respawn.mp3");
var enemy_death1 = new Audio("audio/enemy_death1.mp3");
var enemy_death2 = new Audio("audio/enemy_death2.mp3");
var enemy_death3 = new Audio("audio/enemy_death3.mp3");


// Powerups
var health_powerup = new Audio("audio/health.mp3");
var life_powerup = new Audio("audio/life.mp3");
var rage_activate = new Audio("audio/rage_activate.mp3");
var shield_activate = new Audio("audio/shield_activate.mp3");
var shield_hit = new Audio("audio/shield_hit2.mp3");
var shield_deactivate = new Audio("audio/shield_deactivate.mp3");
*/