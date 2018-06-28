const humanCatDogYears = (number) => {

  let dogAge;
  let catAge;
  let ageArray = []
  
  if (number === 1) {
    ageArray.push(number)
    catAge = 15;
    ageArray.push(catAge)
    dogAge = 15;
    ageArray.push(dogAge)
  }
  // review
  else if (number === 2){
      ageArray.push(number)
      catAge = 24;
      ageArray.push(catAge)
      dogAge = 24;
      ageArray.push(dogAge)    
  }
  else if (number >= 3) {
      ageArray.push(number)
      catAge = number * 4 + 24 - 8;
      ageArray.push(catAge)
      dogAge = number * 5 + 24 - 10;
      ageArray.push(dogAge)
  }
  return ageArray
}
module.exports = humanCatDogYears;