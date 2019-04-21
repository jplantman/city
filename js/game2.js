// for game code that must go after everything else

// cash
game.cashDisplay = document.getElementById("cash");

game.showCash = function () {
  game.cashDisplay.innerHTML =
    "$" + Math.round( mayor.cash );
}
game.showCash();

// zone display demand
game.zoneDisplay = document.getElementById('zoneDemand');

game.showZoneDemand = function () {
  game.zoneDisplay.innerHTML =
    "residential: " + (city.residential.demand) + " : " +
    "commercial: " + (city.commercial.demand) + " : " +
    "industrial: " + (city.industrial.demand)
}

// population display
game.popDisplay = document.getElementById("pop");
game.showPop = function(){
  game.popDisplay.innerHTML = "Population: "+Math.round(city.population);
}
game.showPop();

// init demand display
game.showZoneDemand();

// change name
game.nameDisplay = document.getElementById('cityName');
game.nameDisplay.addEventListener('click', function () {
  var newName = prompt("Enter new name for city:");
  if (newName) {
    city.name = newName;
    game.nameDisplay.innerHTML = newName;
  }
});

// timer
game.speed = 6000;
game.tick = function () {

  setTimeout(
    function () {
      game.tick();
    },
    game.speed
  );

  if (game.paused) { return; }
  game.turn();
  game.showCash();
}
// start game in...
setTimeout(game.tick, 3000);

// timer controls
game.pause = function () {
  game.paused = !game.paused;
}
document.getElementById("pause").addEventListener(
  'click',
  function () {
    game.pause();
    print((game.paused ? "paused" : "unpaused"));
  }
);
document.getElementById("slow").addEventListener(
  'click',
  function () {
    game.paused = false;
    game.speed = 6000;
    print("Speed set to slow", "steelblue");
  }
);
document.getElementById("normal").addEventListener(
  'click',
  function () {
    game.paused = false;
    game.speed = 3000;
    print("Speed set to normal", "steelblue");
  }
);
document.getElementById("fast").addEventListener(
  'click',
  function () {
    game.paused = false;
    game.speed = 1000;
    print("Speed set to fast", "steelblue");
  }
);

