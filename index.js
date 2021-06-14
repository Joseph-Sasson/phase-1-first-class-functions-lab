const returnFirstTwoDrivers = driver => driver.slice(0,2)

const returnLastTwoDrivers = driver => driver.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = fare => {
  return function(){
    return fare*fare
  }
}

const fareDoubler = doubleFare => doubleFare*2

const fareTripler = tripleFare => tripleFare*3

const selectDifferentDrivers = (driverArray, driverFunction) => driverFunction(driverArray)