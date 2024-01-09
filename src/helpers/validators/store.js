const Joi = require("joi");

const storeValidationSchema = Joi.object({
  storeIsActive: Joi.boolean().default(true),
  storeOwner: Joi.string().required(),
  storeName: Joi.string().required(),
  storeSlug: Joi.string().required(),
  storeSmallDescription: Joi.string().required(),
  storeDescription: Joi.string().required(),
  storeKeywords: Joi.array().items(Joi.string()),
  storeTags: Joi.array().items(Joi.string()),
  storeAddress1: Joi.string().required(),
  storeAddress2: Joi.string().allow("").optional(),
  storeCoordinateX: Joi.number(),
  storeCoordinateY: Joi.number(),
  storeCountryCode: Joi.string().required(),
  storeState: Joi.string().required(),
  storeDistrict: Joi.string().allow("").optional(),
  storePin: Joi.string().required(),
  storeBannerText: Joi.string().default(""),
  storeIsOnSale: Joi.boolean().default(false),
  storeServiceList: Joi.array().items(Joi.string()),
  storeAmenities: Joi.array().items(Joi.string()),
  storeType: Joi.array().items(Joi.string().valid(...["Female", "Male", "Unisex", "Kids","Pet"])),
  storeContactPhoneNumber: Joi.string(),
  storeContactName: Joi.string(),
  storeContactEmail: Joi.string(),
  storeSocials: Joi.array().items(Joi.string()),
  storeSlots: Joi.number().default(1),
  storeTimingsMonday: Joi.string().allow(null).default(null),
  storeTimingsTuesday: Joi.string().allow(null).default(null),
  storeTimingsWednesday: Joi.string().allow(null).default(null),
  storeTimingsThursday: Joi.string().allow(null).default(null),
  storeTimingsFriday: Joi.string().allow(null).default(null),
  storeTimingsSaturday: Joi.string().allow(null).default(null),
  storeTimingsSunday: Joi.string().allow(null).default(null),
  storeRating: Joi.number().default(5),
}).unknown(false);

module.exports = { validateStore: storeValidationSchema };