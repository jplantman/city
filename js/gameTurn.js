

// take a turn
game.turn = function () {

  // collect taxes
  var propertyValues = city.residential.current * 100;
  var salesValues = 
    Math.min( city.commercial.current, city.population/8 ) * 50;
  var incomeValues = (city.commercial.current + city.industrial.current) * 50;

  var propertyTaxRev = propertyValues * city.propertyTax/12; // monthly
  var salesTaxRev = salesValues * city.salesTax/12;
  var incomeTaxRev = incomeValues * city.incomeTax/12;

  var income = propertyTaxRev/100 + salesTaxRev/100 + incomeTaxRev/100;

  game.showCash();

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

  // demand

  // public services - recalculate effects
  var expenses = game.calculatePublicServicesEffects();
  
  var netIncome = income - expenses;

  // income and expenses

  // Short Income Report
  print(
    game.date + " income: " + Math.round(100 * income) / 100 + 
    " - " + Math.round(100 * expenses) / 100 + " = <span style='color:"+
    (netIncome < 0 ? "red" : "forestgreen")
    +"'>" + 
    Math.round(100 * netIncome) / 100 + "</span>"
  );

  // Long Income Report
  // print(
  //   "===== " + game.date + " Report =====<br/>"+
  //   "Tax Revenue: "+ Math.round(10*income)/10 + 
  //   " <br/>Public Service Expenses: "+ Math.round(10*expenses)/10
  //   +"<br/>Net Income: " + Math.round(10*netIncome)/10
  // );
  
  mayor.cash += netIncome;

  //advance date
  game.nextDate();
  game.getDate();
  mayor.monthsInOffice += 1;
  game.showDate();

} 

game.calculatePublicServicesEffects = function(){
  var cost = 0;
  city.education.have = 0;
  city.police.have = 0;
  city.medical.have = 0;
  city.fire.have = 0;
  city.transit.have = 0;
  city.nature.have = 0;
  city.water.have = 0;
  city.electricity.have = 0;
  city.pollution = 0;

  var basicSources = city.education.sources
    .concat(city.police.sources)
    .concat(city.medical.sources)
    .concat(city.fire.sources)
    .concat(city.transit.sources)
    .concat(city.nature.sources)
    .concat(city.water.sources)
    .concat(city.electricity.sources)
  for (var i = 0; i < basicSources.length; i++) {
    var service = basicSources[i];
    city.education.have += service.education || 0;
    city.police.have += service.police || 0;
    city.medical.have += service.medical || 0;
    city.fire.have += service.fire || 0;
    city.transit.have += service.transit || 0;
    city.nature.have += service.nature || 0;
    city.water.have += service.water || 0;
    city.electricity.have += service.electricity || 0;
    cost += service.costPer * service.quantity;
  }
  return cost;
}
game.calculatePublicServicesEffects();
