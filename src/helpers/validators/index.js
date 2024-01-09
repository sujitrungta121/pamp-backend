const { validateService } = require('./service');
const { validateStore } = require('./store');
const { validateCategory} = require('./category');
const { validateStoreAmenities } = require('./storeAmenities');


//Exports as a binded module
module.exports = {
    validateService,
    validateStore,
    validateCategory,
    validateStoreAmenities
};
