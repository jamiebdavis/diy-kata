const humanCatDogYears = (number) => {
    const humanAge = number
    const catAge = (15*(number/number)) + (9*(number/number)) + (4*(number-2));
    const dogAge = (15*(number/number)) + (9*(number/number)) + (5*(number-2));

    return [humanAge, catAge, dogAge]
}

module.exports = humanCatDogYears;
