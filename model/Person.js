const Point = require('./Point');

module.exports = class Person {

    /**
     * Persons (based on location) Factory
     * @param {Number} user_id id
     * @param {Number} name name of person
     * @param {Number} latitude location latitude in degrees
     * @param {Number} longitude location longitude in degrees
     */
    constructor(user_id, name, latitude, longitude){
        if(isNaN(user_id)){
            throw new Error('UserID not Numeric');
        }
        this.user_id = Number(user_id);
        this.name = name;
        this.location = new Point(latitude, longitude);
    }

    /**
     * @returns user_id
     */
    get UserID(){
        return this.user_id;
    }

    /**
     * @returns name of person
     */
    get Name(){
        return this.name;
    }

    /**
     * @returns composite Point object for location
     */
    get Location(){
        return this.location;
    }
}