// game data
var game = {
  paused: false,
  month: 0,
  year: 2000,
  date: undefined,
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  getDate: function(){
    game.date = game.months[game.month] + ', ' + game.year;
  },
  nextDate: function(){
    game.month += 1;
    var isNextYear = game.month > 11;
    if (isNextYear) {
      game.month = 0;
      game.year += 1;
      print("Happy new year!");
    }
  },
  dateDisplay: document.getElementById("date"),
};

// init date
game.getDate();
game.showDate = function(){
  game.dateDisplay.innerHTML = game.date;
};
game.showDate();

// name display
game.nameDisplay = document.getElementById('cityName');
