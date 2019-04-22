///////////////  Build Zones Options   //////////////////

game.buildResidentialMenu = function () {
  var cost = 50;
  print(
    "You currently have " + city.residential.max +
    " available residential areas, with " + Math.round(10 * city.residential.current) / 10 +
    " currently in use. Cost to build more: $" + cost
  );
  showButtons([
    ["Build", function () {
      if (mayor.cash >= cost) {
        mayor.cash -= cost;
        game.showCash();
        city.residential.max += 1;
        print("Residential zone was built. (new max: " + city.residential.max + ")");
      } else {
        print("Not enough funds", 'red');
        // flash cash
      }
    }],
    // ["Remove", function(){}],
    ["Consult Advisor"],
    ["Back", function () { game.zoning() }],
    ["Help", function () {
      print("Residential zones are where people live. Building more allows more people to move in. The more people, the higher property tax revenue.");
    }]
  ]);
}

game.buildCommercialMenu = function () {
  var cost = 50;
  print(
    "You currently have " + city.commercial.max +
    " available commercial areas, with " + Math.round(10 * city.commercial.current) / 10 +
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
    ["Advisor"],
    ["Back", function () { game.zoning() }],
    ["Help", function () {
      print("Commercial zones are where people set up stores. The more stores in your city, the more sales tax revenue.");
    }]
  ]);
}

game.buildIndustrialMenu = function () {
  var cost = 50;
  print(
    "You currently have " + city.industrial.max +
    " available industrial areas, with " + Math.round(10 * city.industrial.current) / 10 +
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
    ["Back", function () { game.zoning() }],
    ["Help", function () {
      print("Industrial zones are where people set up production, like farms, quarries, or factories. The more of these in your city, the more industrial tax revenue.");
    }]
  ]);
}

game.zonesAdvisor = function () {
  print(
    "<span style='color:forestgreen;'>Zoning advisor:</span> Here is my report, mayor.<br/>" +
    "============== Report ==============<br/>" +
    "<table>" +
    "<tr>" +
    "<th></th><th>Residential</th><th>Commercial</th><th>Industrial</th>" +
    "</tr><tr>" +
    "<td>Current:</td><td>" + Math.round(100 * city.residential.current) / 100 + "</td><td>" + Math.round(100 * city.commercial.current) / 100 + "</td><td>" + Math.round(100 * city.industrial.current) / 100 + "</td>" +
    "</tr><tr>" +
    "<td>Max:</td><td>" + Math.round(100 * city.residential.max) / 100 + "</td><td>" + Math.round(100 * city.commercial.max) / 100 + "</td><td>" + Math.round(100 * city.industrial.max) / 100 + "</td>" +
    "</tr><tr>" +
    "<td>Demand:</td><td>" + Math.round(100 * city.residential.demand) / 100 + "</td><td>" + Math.round(100 * city.commercial.demand) / 100 + "</td><td>" + Math.round(100 * city.industrial.demand) / 100 + "</td>" +
    "</tr>" +
    "</table>"
  );
}