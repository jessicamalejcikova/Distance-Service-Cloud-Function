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
//Assignment: Create a JavaScript Module
//1/22/2024

//index.js

// //Import the Distance Module 
// const calculateDistance = require('./Distance');

// //Call the Distance module's calculate function four times 
// const feetToMetersResult = calculateDistance('feet', 30);
// console.log(`30 feet is ${feetToMetersResult.toFixed(3)} meters.`);

// const metersToFeetResult = calculateDistance('meters', 30);
// console.log(`30 meters is ${metersToFeetResult.toFixed(3)} feet. `);

// const milesToKmResult = calculateDistance('miles', 30);
// console.log(`30 miles is ${milesToKmResult.toFixed(3)} kilometers. `);

// const kmToMilesResult = calculateDistance('km', 30);
// console.log(`30 kilometers is ${kmToMilesResult.toFixed(3)} miles. `);

//Assignment: Distance Service Cloud Function
//01/29/2024

//const convertUnits = require(' ./Distance.js');

exports.distanceConverter = (req, res) => {
    const { unit, value } = req.query;

    if(!unit || !value) {
        res.status(400).send('Both unit and value parameters are required.');
        return;
    }

    let result;
    switch (unit.toLowerCase()) {
        case 'miles':
            result = milesToKm(parseFloat(value));
            break;
        case 'km':
            result = kmToMiles(parseFloat(value));
            break;
        case 'feet':
            result = feetToMeters(parseFloat(value));
            break;
        case 'meters':
            result = metersToFeet(parseFloat(value));
            break;
        default:
            res.status(400).send('Imvalid unit parameter. Supported units: miles, km, feet, meters. ');
            return;
    }

    res.status(200).send(result.toString());

};