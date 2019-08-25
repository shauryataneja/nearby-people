const fs = require('fs');
const debug = require('debug')('FileUtil');

module.exports = {

    /**
     * Getting JSON array from a txt file of objects in each line
     * @param {String} filePath Path of file to be parsed
     * @returns {Array} list of JSON objects
     */
    getJsonFromTxt: (filePath) => {
        return fs.readFileSync(filePath).toString().split('\n').map((row) => {
            debug('parsing ',row);
            return JSON.parse(row);
        });
    },

    /**
     * Insertion in a sorted array (sorted on object's property)
     * @param {Array} arr Array of JSON objects
     * @param {String} prop sorting property of every object
     * @param {Number} ele Element to be inserted
     * @returns {Array} Modified sorted array
     */
    insertAndSortByProp: (arr, prop, ele) => {
        let i = arr.findIndex(e => ele[prop] <= e[prop]);
        if(i === -1){
            i = arr.length;
        }
        arr.splice(i,0,ele);
        return arr;
    }
}