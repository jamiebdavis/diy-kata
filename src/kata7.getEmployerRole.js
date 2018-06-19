



const getEmployerRole = (name, employees) => {
    for (let i = 0; i < employees.length; i++){
      if (name === employees[i].name){
        return employees[i].role
      }
    }
  } 
module.exports = getEmployerRole
