const Model = require('../model');
const Person = Model.Person;
const Point = Model.Point;
const Lib = require('../lib');
const path = require('path');
const debug = require('debug')('Nearby');

const Nearby = {

    /**
     * Generic function for getting list of nearby people based on input
     * @param {Number} latitude Latitude of current location 
     * @param {Number} longitude Longitude of current location 
     * @param {Number} distance Radius in which users are to be fetched 
     * @param {Array} data List of persons : Person to be filtered
     * @returns {Array} list of Persons
     */
    getList : (latitude, longitude, distance, data) => {
        debug('getList initiated with latitude:%s, longitude:%s, distance:%s',latitude,longitude,distance);
        if(isNaN(distance)){
            throw new Error('Distance not a numerical unit');
        }
        let p1 = new Point(latitude, longitude);
        return data.reduce((list,p) => {
            debug('getList person',p);
            let {user_id, name, latitude, longitude} = p;
            let person = new Person(user_id, name, latitude, longitude);
            if(Lib.GeoUtil.getCrowDistance(p1, person.Location) <= distance){
                return Lib.FileUtil.insertAndSortByProp(list, 'user_id', person);
            }   
            return list;
        },[]);
    },

    /**
     * Generic function for getting list of nearby people based on input, data being a txt file of objects of type Person
     * @param {Number} latitude Latitude of current location 
     * @param {Number} longitude Longitude of current location 
     * @param {Number} distance Radius in which users are to be fetched 
     * @param {String} filePath Path of .txt File to be parsed
     * @returns {Array} list of Persons
     */
    getListFromTxtJSON: (latitude, longitude, distance, filePath) => {
        return Nearby.getList(latitude, longitude, distance, Lib.FileUtil.getJsonFromTxt(filePath))
    },

    /**
     * Generic function for getting list of nearby people based on input, data being a json file of objects oof type Person
     * @param {Number} latitude Latitude of current location 
     * @param {Number} longitude Longitude of current location 
     * @param {Number} distance Radius in which users are to be fetched 
     * @param {String} filePath Path of .txt File to be parsed
     * @returns {Array} list of Persons
     */
    getListFromJSON: (latitude, longitude, distance, filePath) => {
        return Nearby.getList(latitude, longitude, distance, require(filePath))
    },

    /**
     * Getting list of Persons (specified in test/customers.txt) within 100km from Dublin
     * @returns {Array} list of Persons
     */
    getDublin100List: () => {
        return Nearby.getListFromTxtJSON(53.339428, -6.257664, 100, path.join(__dirname, '../test/customers.txt'));
    }
}

module.exports = Nearby;

if(require.main === module){
    console.log('Dublin 100 list as follows');
    console.log(Nearby.getDublin100List());
}