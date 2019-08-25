# nearby-people

Find people nearby to you

  

# Installation

npm install nearby-people

  

# Data Format

Person's data should be of type:

{

    user_id: Number,

    name: Number,

    latitude: Number, // (in degrees),

    longitude: Number // (in degrees)

}

  

# Functions exposed

Nearby : {

	getList: Generic function for getting list of nearby people based on input

		@param {Number} latitude Latitude of current location

		@param {Number} longitude Longitude of current location

		@param {Number} distance Radius in which users are to be fetched

		@param {Array} data List of persons : Person to be filtered

		@returns {Array} list of Persons,

  
	getListFromTxtJSON: Generic function for getting list of nearby people based on input, data being a txt file of objects of type Person

		@param {Number} latitude Latitude of current location

		@param {Number} longitude Longitude of current location

		@param {Number} distance Radius in which users are to be fetched

		@param {String} filePath Path of .txt File to be parsed

		@returns {Array} list of Persons

  
	getListFromJSON: Generic function for getting list of nearby people based on input, data being a json file of objects oof type Person

		@param {Number} latitude Latitude of current location

		@param {Number} longitude Longitude of current location

		@param {Number} distance Radius in which users are to be fetched

		@param {String} filePath Path of .txt File to be parsed

		@returns {Array} list of Persons,

  
	getDublin100List: Getting list of Persons (specified in test/customers.txt) within 100km from Dublin

	@returns {Array} list of Persons

}