const humanCatDogYears = (number) => {
    let catAge = 24 + (4 * (number - 2));
    let dogAge = 24 + (5 * (number - 2));

<<<<<<< HEAD
    if(number === 1) {
      catAge = 15;
      dogAge = 15;
    }

    if(number === 2) {
      catAge = 24;
      dogAge = 24;
    }

    else

     return [number, catAge, dogAge]
=======
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
>>>>>>> 5d51813a7208f4860ab0f747ca9e30b45df8e407
}
module.exports = humanCatDogYears;
