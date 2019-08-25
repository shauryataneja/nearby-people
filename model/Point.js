const convertFactor = Math.PI/180;

/**
 * hi
 */
module.exports = class Point {

    /**
     * GPS Location Factory
     * @param {Number} latitude in degrees
     * @param {Number} longitude in degrees
     */
    constructor(latitude, longitude){
        if(isNaN(latitude)){
            throw new Error('Latitude not numeric');
        }
        if(isNaN(longitude)){
            throw new Error('Longitude not numeric');
        }
        latitude = Number(latitude);
        longitude = Number(longitude);
        this.latDeg = latitude;
        this.longDeg = longitude;
        this.latRad = latitude*convertFactor;
        this.longRad = longitude*convertFactor;
    }

    /**
     * @returns {Number} latitude in degrees
     */
    get LatitudeDeg(){
        return this.latDeg;
    }

    /**
     * @returns {Number} longitude in degrees
     */
    get LongitudeDeg(){
        return this.longDeg;
    }

    /**
     * @returns {Number} latitude in radians
     */
    get LatitudeRad(){
        return this.latRad;
    }

    /**
     * @returns {Number} longitude in radians
     */
    get LongitudeRad(){
        return this.longRad;
    }
}