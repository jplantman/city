///////// Public Services Options  /////////////

game.utilities = function () {
  showButtons([
    ['Water', function(){
      showButtons([
        ["View Catalog", function(){
          var canBuild = {}, options = [];
          for (var i = 0; i < city.water.canBuild.length; i++) {
            var source = city.water.canBuild[i];
            canBuild[source.name] = source;
            options.push(source.name);
          }
          showOptions(options);
          showButtons([
            ["Info", function(){
              var utility = canBuild[selectInput.value];
              print(
                "<span style='text-decoration: underline'>" + utility.name + "</span>" + 
                "<br/>Price: " + utility.cost +
                "<br/>Monthly Cost: " + utility.upkeep +
                "<br/>Water Provided: " + utility.water +
                ( utility.pollution ? "<br/>Pollution: " + utility.pollution : "" )
              );

            }],
            ["Buy", function(){
              var utility = canBuild[selectInput.value];
              var canAfford = utility.cost <= mayor.cash;
              if ( canAfford ){
                print("Really Buy " + utility.name + " for $" + utility.cost + "?" );
                showButtons([
                  ["Yes", function(){
                    // check to see if it is already an owned source
                    var purchaseCompleted = false;
                    for (var i = 0; i < city.water.sources.length; i++) {
                      var owned = city.water.sources[i];
                      if ( owned.name == utility.name ){
                        owned.quantity += 1;
                        purchaseCompleted = true;
                        break;
                      }
                    }
                    // it's not, create a new entry in sources list
                    if ( !purchaseCompleted ){
                      var newEntry = {
                        name: utility.name,
                        quantity: 1,
                        costPer: utility.upkeep,
                        water: utility.water
                      }
                      if (utility.pollution) {
                        newEntry.pollution = utility.pollution;
                      }
                      city.water.sources.push(newEntry);
                    }
                    mayor.cash -= utility.cost;
                    game.showCash();
                    game.utilities();
                    hideOptions();
                    print("Acquired a " + utility.name);
                    game.calculatePublicServicesEffects();
                  }],
                  ["No", function(){
                    game.utilities();
                    hideOptions();
                  }]
                ]);
              } else {
                print("Not enough funds.", "red");
              }
              
            }],
            ["Back", function () {
              game.utilities();
              hideOptions();
            }],
            ["Help"]
          ]);
        }],
        ["Demolish/Cancel", function(){
          var options = [];
          for (var i = 0; i < city.water.sources.length; i++) {
            options.push(city.water.sources[i].name);
          }
          if ( options.length == 0 ){
            print("You have no water sources to demolish/cancel", 'red');
          } else {
            showOptions(options);
            print("What to demolish/cancel?");
            showButtons([
              ["Demolish/cancel", function () {
                for (var i = 0; i < city.water.sources.length; i++) {
                  var util = city.water.sources[i];
                  if (util.name == selectInput.value) {
                    util.quantity -= 1;
                    if (util.quantity == 0) {
                      city.water.sources.splice(i, 1);
                    }
                    break;
                  }
                }
                print(util.name + " is gone. Remaining: " + util.quantity);
                game.utilities();
                hideOptions();
                game.calculatePublicServicesEffects();
              }],
              ["Never mind", function () {
                game.utilities();
                hideOptions();
              }]
            ]);
          }
        }],
        ["Research"],
        ["Advisor"],
        ["Back", function(){ game.utilities(); }],
        ["Help"]
      ]);
    }],
    ['Power'],
    ["Advisor", function () {
      var waterSourcesInfo = "Water Sources:<br/>";
      var waterPol = 0;
      var waterCost = 0;

      for (var i = 0; i < city.water.sources.length; i++) {
        var source = city.water.sources[i];
        waterSourcesInfo += source.quantity + " " + source.name + "<br/>";
        waterPol += source.pollution * source.quantity || 0;
        waterCost += source.costPer * source.quantity;
        console.log(source)
      }

      var electricitySourcesInfo = "Electricity Sources:<br/>";
      var electricityPol = 0;
      var electricityCost = 0;

      for (var i = 0; i < city.electricity.sources.length; i++) {
        var source = city.electricity.sources[i];
        electricitySourcesInfo += source.quantity + " " + source.name + "<br/>";
        electricityPol += source.pollution * source.quantity || 0;
        electricityCost += source.costPer * source.quantity;
      }

      print(
        "<span style='color:forestgreen;'>Utilities advisor:</span> Here is my report, mayor.<br/>" +
        "============== Report ==============<br/>" +
        "<table>" +
        "<tr>" +
        "<th></th><th>Water</th><th>Electric</th>" +
        "</tr><tr>" +
        "<td>Need:</td><td>" + Math.round(100 * city.water.demand) / 100 + "</td><td>" + Math.round(100 * city.electricity.demand) / 100 + "</td>" +
        "</tr><tr>" +
        "<td>Have:</td><td>" + Math.round(100 * city.water.have) / 100 + "</td><td>" + Math.round(100 * city.electricity.have) / 100 + "</td>" +
        "</tr><tr>" +
        "<td>Cost:</td><td>" + Math.round(100 * waterCost) / 100 + "</td><td>" + Math.round(100 * electricityCost) / 100 + "</td>" +
        "</tr>" +
        "</tr><tr>" +
        "<td>Pollution:</td><td>" + Math.round(100 * waterPol) / 100 + "</td><td>" + Math.round(100 * electricityPol) / 100 + "</td>" +
        "</tr>" +
        "</table>" + waterSourcesInfo + electricitySourcesInfo
      );
    }],
    ['Back', function () { game.mainMenu(); }],
    ["Help", function(){
      print("People will move away if you do not provide them with adequate electricity or water. In a pinch, you can take out a loan to build a source, or buy some from a neighbor.");
    }]
  ]);
}
