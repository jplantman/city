// // public services have
// game.haveEducation = function(){
//   var have = 0, arr = city.education.sources;
//   for (var i = 0; i < arr.length; i++) {
//     var source = arr[i];
    
//   }
  
// }


// public services demand
game.demandForEducation = function(){
  return city.residential.current / 30;
}

game.demandForPolice = function () {
  return (
    city.residential.current * (city.residential.crimeFactor)+
    city.commercial.current * (city.commercial.crimeFactor) +
    city.industrial.current * (city.industrial.crimeFactor)
  )/25 * ( city.education.demand/city.education.have );
}