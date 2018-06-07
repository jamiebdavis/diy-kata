const numberToReversedDigits = (number) => {

    let newString = String(number);
    let newArray = [];
  
    for (let i = 0; i < newString.length; i++){
      newArray.push(Number(newString[i]));
    }
    newArray.reverse();
    return newArray;
  }



module.exports = numberToReversedDigits;