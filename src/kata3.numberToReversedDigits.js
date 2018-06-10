const numberToReversedDigits = (number) => {
<<<<<<< HEAD
    return Array.from(String(number), Number).reverse();
}
=======

    let newString = String(number);
    let newArray = [];
  
    for (let i = 0; i < newString.length; i++){
      newArray.push(Number(newString[i]));
    }
    newArray.reverse();
    return newArray;
  }
>>>>>>> 5d51813a7208f4860ab0f747ca9e30b45df8e407



module.exports = numberToReversedDigits;