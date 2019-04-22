
game.mayorMenu = function () {
  showButtons([
    ["Change Name", function () {
      print("Your name is " + mayor.name + ". Enter new name:");
      textInput.style.display = "block";
      textInput.focus();
      showButtons([
        ["Ok", function () {
          var value = textInput.value;
          var inputIsValid = /^[a-z]+([a-z ]?)+$/i.test(value);
          if (inputIsValid) {
            mayor.name = value;
            textInput.style.display = 'none';
            textInput.value = "";
            print("Thanks, " + mayor.name + ", your name was changed!");
            game.mainMenu();
          } else {
            print("Please pick a better name (with only letters and spaces)", "red");
          }
        }],
        ["Never Mind", function () {
          print("Name not changed, still is " + mayor.name);
          textInput.style.display = "none";
          textInput.value = "";
          game.mayorMenu();
        }]
      ]);
    }],
    ["Biography"],
    ["Back", function () { game.mainMenu() }],
    ["Help"]
  ]);
}
