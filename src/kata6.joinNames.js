const joinNames = (namesObj) => {

    let newString = ''

    for (let i = 0; i < namesObj.length - 1; i++) {
      newString += namesObj[i].name + ", "
    }

    newString += namesObj[namesObj.length - 1].name

    newString = newString.replace(/,(?=[^,]*$)/, ' &')

    return newString

  }


module.exports = joinNames;
