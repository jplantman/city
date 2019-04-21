game.mainMenu = function(){
  showButtons([
    ["Build Zones", function(){ game.buildZones() }],
    ["Build Public Services", function(){ game.buildPublic() }],
    ["Build Special"],
    ["Manage City", function(){ game.manageCity() }],
    [mayor.name, function(){ game.mayorMenu() }],
    ["Game Menu"],
    ["Help", function(){
      print("This is a game where you manage a city. If you do a good job as mayor, more people will move in and your city will grow. Click the buttons and read the different help menus to learn more. Have fun!");
    }]
  ]);
}
game.mainMenu();

///////// Main Menu Options  /////////////

game.buildZones = function(){
  showButtons([
    ["Residential", function () { game.buildResidentialMenu() }],
    ["Commercial", function () { game.buildCommercialMenu() }],
    ["Industrial", function () { game.buildIndustrialMenu() }],
    ["Report", function () { game.zonesReport() }],
    ["Back", function(){ game.mainMenu() }],
    ["Help", function(){
      print("Zones are the most important part of your city. Build more zones to allow people to live, sell, and produce in your city. If there is demand for a zone type, and available space, people will use it up. This is good. If the demand is negative, people may leave a zone. Demand is affected by many things. You have advisors who will offer more advice.");
    }]
  ]);
}

// build special TO DO

game.buildPublic = function () {
  showButtons([
    ["Utilities"],
    ["Police, Fire, Health"],
    ["Transit"],
    ["Parks n Rec"],
    ["Education"],
    ["Back", function(){ game.mainMenu() }],
    ["Help"]
  ]);
}

game.manageCity = function () {
  showButtons([
    ["Zoning Advisor"],
    ["Public Services Advisor"],
    ["Financial Advisor"],
    ["Set Taxes", function(){

    }],
    ["Set By-Laws"],
    ["Back", function(){ game.mainMenu() }],
    ["Help"]
  ]);
}

game.mayorMenu = function(){
  showButtons([
    ["Change Name", function(){
      print("Your name is " + mayor.name + ". Enter new name:");
      textInput.style.display = "block";
      showButtons([
        ["Ok", function(){
          mayor.name = textInput.value;
          textInput.style.display = "none";
          textInput.value = "";
          print("Thanks, " + mayor.name + ", your name was changed!");
          game.mainMenu();
        }],
        ["Never Mind", function(){
          print("Name not changed, still is " +mayor.name);
          textInput.style.display = "none";
          textInput.value = "";
          game.mayorMenu();
        }]
      ]);
    }],
    ["Biography"],
    ["Back", function(){ game.mainMenu() }],
    ["Help"]
  ]);
}

///////////////  Build Zones Options   //////////////////

game.buildResidentialMenu = function () {
  var cost = 50;
  print(
    "You currently have " + city.residential.max + 
    " available residential areas, with " + Math.round(10*city.residential.current)/10 +
    " currently in use. Cost to build more: $" + cost
    );
  showButtons([
    ["Build", function(){
      if (mayor.cash >= cost){
        mayor.cash -= cost;
        game.showCash();
        city.residential.max += 1;
        print("Residential zone was built. (new max: "+city.residential.max+")");
      } else {
        print("Not enough funds", 'red');
        // flash cash
      }
    }],
    // ["Remove", function(){}],
    ["Consult Advisor"],
    ["Back", function () { game.mainMenu() }],
    ["Help", function(){
      print("Residential zones are where people live. Building more allows more people to move in. The more people, the higher property tax revenue.");
    }]
  ]);
}

game.buildCommercialMenu = function () {
  var cost = 50;
  print(
    "You currently have " + city.commercial.max +
    " available commercial areas, with " + Math.round(10*city.commercial.current)/10 +
    " currently in use. Cost to build more: $" + cost
  );
  showButtons([
    ["Build", function () {
      if (mayor.cash >= cost) {
        mayor.cash -= cost;
        game.showCash();
        city.commercial.max += 1;
        print("Commercial zone was built. (new max: " + city.commercial.max + ")");
      } else {
        print("Not enough funds", 'red');
        // flash cash
      }
    }],
    // ["Remove", function(){}],
    ["Consult Advisor"],
    ["Back", function () { game.mainMenu() }],
    ["Help", function () {
      print("Commercial zones are where people set up stores. The more stores in your city, the more sales tax revenue.");
    }]
  ]);
}

game.buildIndustrialMenu = function () {
  var cost = 50;
  print(
    "You currently have " + city.industrial.max +
    " available industrial areas, with " + Math.round(10*city.industrial.current)/10 +
    " currently in use. Cost to build more: $" + cost
  );
  showButtons([
    ["Build", function () {
      if (mayor.cash >= cost) {
        mayor.cash -= cost;
        game.showCash();
        city.industrial.max += 1;
        print("Industrial zone was built. (new max: " + city.industrial.max + ")");
      } else {
        print("Not enough funds", 'red');
        // flash cash
      }
    }],
    // ["Remove", function(){}],
    ["Consult Advisor"],
    ["Back", function () { game.mainMenu() }],
    ["Help", function () {
      print("Industrial zones are where people set up production, like farms, quarries, or factories. The more of these in your city, the more industrial tax revenue.");
    }]
  ]);
}

game.zonesReport = function(){
  print(
    "============== Report ==============<br/>"+
    "<table>"+
      "<tr>"+
        "<th></th><th>Residential</th><th>Commercial</th><th>Industrial</th>"+
      "</tr><tr>"+
    "<td>Current:</td><td>" + Math.round(city.residential.current) + "</td><td>" + Math.round(city.commercial.current) + "</td><td>" + Math.round(city.industrial.current) +"</td>" +
    "</tr><tr>" +
    "<td>Max:</td><td>" + Math.round(city.residential.max) + "</td><td>" + Math.round(city.commercial.max) + "</td><td>" + Math.round(city.industrial.max) + "</td>" +
    "</tr><tr>" +
    "<td>Demand:</td><td>" + Math.round(100*city.residential.demand)/100 + "</td><td>" + Math.round(100*city.commercial.demand)/100 + "</td><td>" + Math.round(100*city.industrial.demand)/100 + "</td>" +
      "</tr>"+
    "</table>"
  );
}

