///////// Manage City Options  /////////////

game.renameCity = function () {
  textInput.style.display = 'block';
  textInput.focus();
  print("Enter new name for city:");
  showButtons([
    ["Ok", function () {
      var value = textInput.value;
      var inputIsValid = /^[a-z]+([a-z ]?)+$/i.test(value);
      if (inputIsValid) {
        city.name = value;
        game.nameDisplay.innerHTML = value;
        textInput.style.display = 'none';
        textInput.value = "";
        game.manageCity();
      } else {
        print("Please pick a better name (with only letters and spaces)", "red");
      }
    }],
    ["Never Mind", function () {
      textInput.style.display = 'none';
      textInput.value = "";
      game.manageCity();
    }]
  ]);
}

game.zoningAdvisor = function () { }

game.publicServicesAdvisor = function () { }

game.financialAdvisor = function () { }

game.taxes = function () {
  print(
    "====== Tax Rates ======<br/>" +
    "Property Tax: " + city.propertyTax +
    "<br/>Sales Tax: " + city.salesTax +
    "<br/>Income Tax: " + city.incomeTax
  );
}
game.taxesMenu = function () {
  showButtons([
    ["Change Property Tax", function () {
      textInput.style.display = 'block';
      textInput.focus();
      print("What should the property tax rate be?");
      showButtons([
        ["Ok", function () {
          var value = textInput.value;
          var inputIsValid = /^\d\d?$/i.test(value);
          if (inputIsValid) {
            city.propertyTax = +value;
            print("Property tax changed to " + value);
            textInput.style.display = 'none';
            textInput.value = "";
            game.taxesMenu();
          } else {
            print("Please enter a valid tax rate.");
          }
        }],
        ["Never Mind", function () {
          textInput.style.display = 'none';
          textInput.value = "";
          game.taxesMenu();
        }]
      ]);
    }],
    ["Change Sales Tax", function () {
      textInput.style.display = 'block';
      textInput.focus();
      print("What should the sales tax rate be?");
      showButtons([
        ["Ok", function () {
          var value = textInput.value;
          var inputIsValid = /^\d\d?$/i.test(value);
          if (inputIsValid) {
            city.salesTax = +value;
            print("Sales tax changed to " + value);
            textInput.style.display = 'none';
            textInput.value = "";
            game.taxesMenu();
          } else {
            print("Please enter a valid tax rate.");
          }
        }],
        ["Never Mind", function () {
          textInput.style.display = 'none';
          textInput.value = "";
          game.taxesMenu();
        }]
      ]);
    }],
    ["Change Income Tax", function () {
      textInput.style.display = 'block';
      textInput.focus();
      print("What should the income tax rate be?");
      showButtons([
        ["Ok", function () {
          var value = textInput.value;
          var inputIsValid = /^\d\d?$/i.test(value);
          if (inputIsValid) {
            city.incomeTax = +value;
            print("Income tax changed to " + value);
            textInput.style.display = 'none';
            textInput.value = "";
            game.taxesMenu();
          } else {
            print("Please enter a valid tax rate.");
          }
        }],
        ["Never Mind", function () {
          textInput.style.display = 'none';
          textInput.value = "";
          game.taxesMenu();
        }]
      ]);
    }],
    ["Tax Rates", function () { game.taxes(); }],
    ["Back", function () { game.manageCity(); }],
    ["Help"]
  ]);
}

game.byLaws = function () { }