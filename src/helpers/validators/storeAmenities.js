const Joi = require("joi");

const storeAmenitiesValidationSchema = Joi.object({
  isActive: Joi.boolean().default(true),
  name: Joi.string().required(),
  slug: Joi.string().required(),
}).unknown(false);

module.validateStoreAmenities = storeAmenitiesValidationSchema;
