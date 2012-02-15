// Place any general functions in this file
// They will be available in all following files

// Convenience method
function log(msg) { console.log(msg); }

function randomFromTo(from, to){
  return Math.floor(Math.random() * (to - from + 1) + from);
}



/*
// Workarounds for setInterval 'this' context errors

// 1.) Define variable to hold 'this' context
var self = this;
setInterval(function() {log(self)}, 1000)


// 2.) Funky closure shit
this.interval = setInterval(
  (function(self) {
    return function() {
      self.retrieve_rate();
    }
  })(this), 1000);
*/