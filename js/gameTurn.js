

// take a turn
game.turn = function () {

  //advance date
  game.nextDate();
  game.getDate();
  mayor.monthsInOffice += 1;
  game.showDate();


  // collect taxes
  var propertyValues = city.residential.current * 100;
  var salesValues = 
    Math.min( city.commercial.current, city.population/8 ) * 50;
  var incomeValues = (city.commercial.current + city.industrial.current) * 50;

  var propertyTaxRev = propertyValues * city.propertyTax/12; // monthly
  var salesTaxRev = salesValues * city.salesTax/12;
  var incomeTaxRev = incomeValues * city.incomeTax/12;

  mayor.cash += propertyTaxRev/100 + salesTaxRev/100 + incomeTaxRev/100;
  game.showCash();

  // manage demand
  // TO DO

  // grow zones
  var zones = [
    city.residential,
    city.commercial,
    city.industrial
  ];
  for (let i = 0; i < zones.length; i++) {
    const zone = zones[i];
    zone.current *=
      (1 + zone.demand/12);
    if (zone.current > zone.max) {
      zone.current = zone.max;
    }
  }

  // population
  var popPerResidential = 10;
  city.population = city.residential.current * popPerResidential;
  game.showPop();
} 