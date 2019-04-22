// for game code that must go after everything else

// cash
game.cashDisplay = document.getElementById("cash");

game.showCash = function () {
  game.cashDisplay.innerHTML =
    "$" + Math.round( 100*mayor.cash )/100;
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

// timer
var minPerYear = 60 * 1000 / 12;
var slowSpeed = 5 * minPerYear;
var normalSpeed = 2.5 * minPerYear;
var fastSpeed = 1 * minPerYear;
game.speed = normalSpeed;
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
// start timer in...
print("Starting Game. Speed set to normal.", "steelblue");
setTimeout(game.tick, normalSpeed);

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
    game.speed = slowSpeed;
    print("Speed set to slow", "steelblue");
  }
);
document.getElementById("normal").addEventListener(
  'click',
  function () {
    game.paused = false;
    game.speed = normalSpeed;
    print("Speed set to normal", "steelblue");
  }
);
document.getElementById("fast").addEventListener(
  'click',
  function () {
    game.paused = false;
    game.speed = fastSpeed;
    print("Speed set to fast", "steelblue");
  }
);
game.nameDisplay.innerHTML = city.name;

