const mongoose = require('mongoose');

const storeAmenitiesSchema = new mongoose.Schema({
    isActive: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    }
});

const StoreAmenities = mongoose.model('StoreAmenities', storeAmenitiesSchema);

module.exports = StoreAmenities;
