const humanCatDogYears = (number) => {
    const catAge = 24 + (4*(number-2));
    const dogAge = 24 + (5*(number-2));

    return [number, catAge, dogAge]
}

module.exports = humanCatDogYears;
