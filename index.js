
//Assignment: Create a JavaScript Module
//1/22/2024

//index.js

//Import the Distance Module 
const calculateDistance = require('./Distance');

//Call the Distance module's calculate function four times 
const feetToMetersResult = calculateDistance('feet', 30);
console.log(`30 feet is ${feetToMetersResult.toFixed(3)} meters.`);

const metersToFeetResult = calculateDistance('meters', 30);
console.log(`30 meters is ${metersToFeetResult.toFixed(3)} feet. `);

const milesToKmResult = calculateDistance('miles', 30);
console.log(`30 miles is ${milesToKmResult.toFixed(3)} kilometers. `);

const kmToMilesResult = calculateDistance('km', 30);
console.log(`30 kilometers is ${kmToMilesResult.toFixed(3)} miles. `);

