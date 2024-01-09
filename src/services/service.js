// services/serviceService.js

const Service = require('../models/service');

const serviceService = {

    // Create a new service
    async create(data) {
        try {
            const newService = new Service(data);
            return await newService.save();
        } catch (error) {
            throw error;
        }
    },

    // Get all services
    async findAll() {
        try {
            return await Service.find()
                .populate('serviceCategory')
                .populate('serviceSubCategory');
        } catch (error) {
            throw error;
        }
    },

     // Get all Active services
     async findAllActive() {
        try {
            return await Service.find({
                serviceIsActive: true
            })
                .populate('serviceCategory')
                .populate('serviceSubCategory');
        } catch (error) {
            throw error;
        }
    },

    //Get all service by store Id
    async findAllByStore(store) {
        try {
            return await Service.find({
                serviceStore: store,
            })
                .populate('serviceCategory')
                .populate('serviceSubCategory');
        } catch (error) {
            throw error;
        }
    },

    //Get all service by store Id which are active
    async findAllByStoreActive(store) {
        try {
            return await Service.find({
                serviceStore: store,
                serviceIsActive: true
            })
                .populate('serviceCategory')
                .populate('serviceSubCategory');
        } catch (error) {
            throw error;
        }
    },

    // Get a single service by its ID
    async findById(id) {
        try {
            return await Service.findById(id)
                .populate('serviceCategory')
                .populate('serviceSubCategory');
        } catch (error) {
            throw error;
        }
    },

    // Update a service by its ID
    async update(id, data) {
        try {
            return await Service.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw error;
        }
    },

    // Delete a service by its ID
    async delete(id) {
        try {
            return await Service.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

};

module.exports = serviceService;
