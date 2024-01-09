const StoreAmenities = require('../models/storeAmenities');

const storeAmenitiesService = {

    // Create a new store amenity
    async create(data) {
        try {
            const storeAmenity = new StoreAmenities(data);
            return await storeAmenity.save();
        } catch (error) {
            throw error;
        }
    },

    // Get all store amenities
    async findAll() {
        try {
            return await StoreAmenities.find();
        } catch (error) {
            throw error;
        }
    },

    // Get a single store amenity by its ID
    async findById(id) {
        try {
            return await StoreAmenities.findById(id);
        } catch (error) {
            throw error;
        }
    },

    // Update a store amenity
    async update(id, data) {
        try {
            return await StoreAmenities.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw error;
        }
    },

    // Delete a store amenity
    async delete(id) {
        try {
            return await StoreAmenities.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

};

module.exports = storeAmenitiesService;
