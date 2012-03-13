/* MASS VARIABLE INITIALIZATION
/----------------------------------*/
var canvas     = document.getElementById('canvas'), // Hook to the HTML element
    ctx        = canvas.getContext('2d'), // Main context variable
    C_WIDTH    = canvas.width, // Stored constant width/height references
    C_HEIGHT   = canvas.height,
    C_MIDX     = canvas.width/2,
    C_MIDY     = canvas.height/2,
    TILE_SIZE  = 30,    
    gamePaused = false,
    menuActive = false,
    gameLoop,
    MAX_LEVELS = 3,
    current_level = 0;
    
var DEBUG_MODE = true; // Set to true to enable debug messages in the console
    

/* MANAGER ARRAYS
/----------------------------------*/
var collectables = [], // Powerups, etc
    blocks       = [],    
    enemies      = [],
    playerProjectiles = [],
    enemyProjectiles  = [];

function resetManagers() {
    collectables      = [];
    blocks            = [];
    enemies           = [];
    playerProjectiles = [];
    enemyProjectiles  = [];
}