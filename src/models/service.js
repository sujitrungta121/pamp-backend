const mongoose = require('mongoose');
const { serviceEnums } = require("../helpers/enums");

const serviceSchema = new mongoose.Schema({
    
  serviceIsActive: {
    type: Boolean,
    default: true,
  },
  serviceStore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    required: true,
  },
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  serviceSubCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  serviceName: {
    type: String,
    required: true,
  },
  serviceSmallDescription: {
    type: String,
  },
  serviceDescription: {
    type: String,
  },
  serviceImage: [{
    type: String,
  }],
  servicePrice: {
    type: Number,
    required: true,
    default: 0,
  },
  serviceTime: {
    type: Number,
    default: 0,
  },
  serviceGender: [{
    type: String,
    enum: serviceEnums.serviceGender,
  }],
  serviceTags: [{
    type: String,
  }],
  serviceIsOnSale: {
    type: Boolean,
    default: false,
  },
  serviceSalePrice: {
    type: Number,
    default: 0,
  },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
