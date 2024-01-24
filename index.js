// Code your solution in this file!

const myArray = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = function(scuber){
    return scuber.slice(0,2);
}

const returnLastTwoDrivers = function(scruber){
    return scruber.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers)

const createFareMultiplier = (value) => {
    return function(fare = 4){
        return fare * value
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)

}

const selectDifferentDrivers = (scruber, fn) => {
    return fn(scruber);
}
console.log(selectDifferentDrivers(selectingDrivers, returnLastTwoDrivers))
