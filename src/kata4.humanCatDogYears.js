const humanCatDogYears = (number) => {
    let catAge = 24 + (4 * (number - 2));
    let dogAge = 24 + (5 * (number - 2));

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
}

module.exports = humanCatDogYears;
