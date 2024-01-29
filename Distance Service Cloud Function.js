//Assignment: Distance Service Cloud Function
//01/29/2024

const convertUnits = require(' ./home/jmalejci/41200/distance_module/Distance.js');

exports.distanceConverter = (req, res) => {
    const { unit, value } = req.query;

    if(!unit || !value) {
        res.status(400).send('Both unit and value parameters are required.');
        return;
    }

    let result;
    switch (unit.toLowerCase()) {
        case 'miles':
            result = convertUnits.milesToKm(parseFloat(value));
            break;
        case 'km':
            result = convertUnits.kmToMiles(parseFloat(value));
            break;
        case 'feet':
            result = convertUnits.feetToMeters(parseFloat(value));
            break;
        case 'meters':
            result = convertUnits.metersToFeet(parseFloat(value));
            break;
        default:
            res.status(400).send('Imvalid unit parameter. Supported units: miles, km, feet, meters. ');
            return;
    }

    res.status(200).send(result.toString());

};