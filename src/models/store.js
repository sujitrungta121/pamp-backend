const mongoose = require("mongoose");
const { storeEnum } = require("../helpers/enums");

/*

here store owner is firebase ID basically

*/

const StoreSchema = new mongoose.Schema({
  storeIsActive: {
    type: Boolean,
    default: true,
  },
  storeOwner: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  storeSlug: {
    type: String,
    required: true,
    unique: true,
  },
  storeSmallDescription: {
    type: String,
    required: true,
  },
  storeDescription: {
    type: String,
    required: true,
  },
  storeKeywords: [
    {
      type: String,
    },
  ],
  storeTags: [
    {
      type: String,
    },
  ],
  storeAddress1: {
    type: String,
    required: true,
  },
  storeAddress2: {
    type: String,
  },
  storeCoordinateX: {
    type: Number,
  },
  storeCoordinateY: {
    type: Number,
  },
  storeCountryCode: {
    type: String,
    required: true,
  },
  storeState: {
    type: String,
    required: true,
  },
  storeDistrict: {
    type: String,
  },
  storePin: {
    type: String,
    required: true,
  },
  storeBannerText: {
    type: String,
    default: "",
  },
  storeIsOnSale: {
    type: Boolean,
    default: false,
  },
  storeServiceList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  storeAmenities: [
    {
      type: String,
    },
  ],
  storeType: [
    {
      type: String,
      enum: storeEnum.storeType
    },
  ],
  storeContactPhoneNumber: {
    type: String
  },
  storeContactName: {
    type: String,
  },
  storeContactEmail: {
    type: String,
  },
  storeSocials: [
    {
      type: String,
    },
  ],
  storeSlots: {
    type: Number,
    default: 1,
  },
  storeTimingsMonday: {
    type: String,
    default: null, // Closed
  },
  storeTimingsTuesday: {
    type: String,
    default: null, // Closed
  },
  storeTimingsWednesday: {
    type: String,
    default: null, // Closed
  },
  storeTimingsThursday: {
    type: String,
    default: null, // Closed
  },
  storeTimingsFriday: {
    type: String,
    default: null, // Closed
  },
  storeTimingsSaturday: {
    type: String,
    default: null, // Closed
  },
  storeTimingsSunday: {
    type: String,
    default: null, // Closed
  },
  storeRating: {
    type: Number,
    default: 5,
  },
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
