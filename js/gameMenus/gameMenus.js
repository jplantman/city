game.mainMenu = function(){
  showButtons([
    ["Zoning", function(){ game.zoning(); }],
    ["Public Services", function(){ game.buildPublic(); }],
    ["Special Buildings"],
    ["Manage City", function(){ game.manageCity(); }],
    ["Mayor "+mayor.name, function(){ game.mayorMenu(); }],
    ["Game Menu"],
    ["Help", function(){
      print("This is a game where you manage a city. If you do a good job as mayor, more people will move in and your city will grow. Click the buttons and read the different help menus to learn more. Have fun!");
    }]
  ]);
}
game.mainMenu();

///////// Main Menu Options  /////////////

game.zoning = function(){
  showButtons([
    ["Residential", function () { game.buildResidentialMenu(); }],
    ["Commercial", function () { game.buildCommercialMenu(); }],
    ["Industrial", function () { game.buildIndustrialMenu(); }],
    ["Advisor", function () { game.zonesAdvisor(); }],
    ["Back", function(){ game.mainMenu(); }],
    ["Help", function(){
      print("Zones are the most important part of your city. Build more zones to allow people to live, sell, and produce in your city. If there is demand for a zone type, and available space, people will use it up. This is good. If the demand is negative, people may leave a zone. Demand is affected by many things. You have advisors who will offer more advice.");
    }]
  ]);
}

// build special TO DO

game.buildPublic = function () {
  showButtons([
    ["Utilities", function(){ game.utilities(); }],
    ["Police, Fire, Health"],
    ["Transit"],
    ["Parks n Rec"],
    ["Education"],
    ["Advisor"],
    ["Back", function(){ game.mainMenu(); }],
    ["Help"]
  ]);
}

game.manageCity = function () {
  showButtons([
    ["Rename City", function () { game.renameCity(); }],
    ["Zoning Advisor"],
    ["Public Services Advisor"],
    ["Financial Advisor"],
    ["Taxes", function(){ game.taxes(); game.taxesMenu(); }],
    ["By-Laws"],
    ["Back", function(){ game.mainMenu(); }],
    ["Help"]
  ]);
}




