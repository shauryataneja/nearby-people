module.exports = {

    /**
     * This uses Haversine formula to calculate distances between two WSG84 points (type: Point)
     * @param {Point} point1 1st location
     * @param {Point} point2 2nd location
     * @returns {Number} distance in km
     */
    getCrowDistance: (point1, point2) => {
        if(isNaN(point1 && point1.LatitudeRad) || isNaN(point1 && point1.LongitudeRad)){
            throw new Error('point1 not initialized');
        }
        if(isNaN(point2 && point2.LatitudeRad) || isNaN(point2 && point2.LongitudeRad)){
            throw new Error('point2 not initialized');
        }
        var R = 6371; // Radius of the earth in km
        var dLatRad = point2.LatitudeRad - point1.LatitudeRad;
        var dLongRad = point2.LongitudeRad - point1.LongitudeRad; 
        var a = 
            Math.sin(dLatRad/2) * Math.sin(dLatRad/2) +
            Math.cos(point1.LatitudeRad) * Math.cos(point2.LatitudeRad) * 
            Math.sin(dLongRad/2) * Math.sin(dLongRad/2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        return d;
    }
}