// Enemies our player must avoid
// 

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug-copy1.png';
    this.x = 1;
    this.y = this.randomPosition();
    this.speed =  this.randomSpeed();
    console.log(this.speed);
};


Enemy.prototype.randomSpeed = function() {
    var speeds = [50,75,100];
    var movment = Math.floor((Math.random() * 3));
    return speeds[movment];
}

Enemy.prototype.randomPosition = function() {
    //between 0 and 2
    var randomNumber = Math.floor((Math.random() * 3));
    var positions = [140,220,300];
    return positions[randomNumber];
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
        this.x = (this.x + ( this.speed * dt )) ;
    } else {
        this.x = 1 ;
        this.y = this.randomPosition();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(char) {
    char == 'boy' ? this.sprite = 'images/char-boy-copy.png' : this.sprite = 'images/char-cat-girl-copy.png';
    this.x = 218;
    this.y = 490;
    this.lives = 3;
    this.score = 0;
    $("#current-score").html('Score:<span>'+ this.score +'</span>');

};

Player.prototype.update = function(){

  var result = this.checkCollision();

  if (this.y <= 50) {
    this.score += 10;
    $("#current-score").html('Score:<span>'+ this.score +'</span>');
  }
  if( this.y <= 50 || this.y > 490) {
    this.y = 490;
  }

  if(this.x < 0) {
    this.x = 0;
  }

  if(this.x >= 430) {
    this.x = 430;
  }
  
  if (result === '1') {
    this.x = 218;
    this.y = 490;
    this.lives--;
    $(".heart-block span:last-child").remove();
  }

  if(this.lives == 0) {
    this.restart();
    this.update = function(){};
  }
};


Player.prototype.checkCollision = function() {

  var playerx = this.x ;
  var playery = this.y ;
  var collision = '0';

  allEnemies.forEach(function(enemy){
    var case1 , case2  ;
    var y = [0,35,70];

    for (var i = 0 ; i < 3 ; i ++)
    {
      enemy.x < playerx && playerx < (enemy.x + 90) && enemy.y < (playery + y[i] ) && (playery + y[i] ) < (enemy.y + 60) ? case1 = true : case1 = false;
      enemy.x < ( playerx + 60 ) && ( playerx + 60 ) < (enemy.x + 90) && enemy.y <  (playery + y[i] ) && (playery + y[i] ) < (enemy.y + 60) ? case2 = true : case2 = false;
      if ( case1 || case2 ) {
        break;
      }
    }

    if (case1 || case2 ) {
      collision =  '1';
    }

  });
  return collision;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){

  if(key == 'up') {
    this.y -= 20;
  }

  if(key == 'down') {
    this.y += 20;
  }

  if(key == 'left') {
    this.x -= 20;
  }

  if(key == 'right') {
    this.x+= 20;
  }
};

Player.prototype.restart = function(){
    $("#mycanvas").hide();
    $("#game").hide();
    $("#startgame").show();
    $("#score").append('<span>'+ this.score+'</span>');
    $("#game-over").show();
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1 ,enemy2 , enemy3 , enemy4];
var player = new Player('boy');


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

  function setPlayer(char){
      var heart = '<span class="glyphicon glyphicon-heart"></span><span class="glyphicon glyphicon-heart"></span><span class="glyphicon glyphicon-heart"></span>';
      $(".heart-block" ).has(".glyphicon-heart" ).length ? $(".heart-block").append('') : $(".heart-block").append(heart);
      $("#mycanvas").show();
      $("#game").show();
      $("#startgame").hide();
      $("#score span:last-child").remove();
      $("#game-over").hide();
       player = new Player(char);
     }

