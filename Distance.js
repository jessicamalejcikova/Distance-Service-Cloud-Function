//Assignment: Create a JavaScript Module
//Date: 1/22/2024

//The Internal Helper Functions
function feetToMeters(feet) {
    return feet * 0.3048;
}

function metersToFeet(meters) {
    return meters * 3.28084;
}

function milesToKm(miles) {
    return miles * 1.60934;
}

function kmToMiles(km) {
    return km * 0.621371;

}

//Main Calculate Function
function calculate(unit, value) {
    let result;
    switch (unit) {
      case 'feet':
        result = feetToMeters(value);
        break;
      case 'meters':
        result = metersToFeet(value);
        break;
      case 'miles':
        result = milesToKm(value);
        break;
     case 'km':
        result = kmToMiles(value);
        break;
     default:
        throw new Error('Invalid unit provided');

    }
return result;
}


//Export the Calculate Function
module.exports = calculate; 

