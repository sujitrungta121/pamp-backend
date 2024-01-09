const Joi = require("joi");

const serviceValidationSchema = Joi.object({
  serviceIsActive: Joi.boolean().default(true),
  serviceStore: Joi.string().required(),
  serviceCategory: Joi.string().allow(null).default(null),
  serviceSubCategory: Joi.string().allow(null).default(null),
  serviceName: Joi.string().required(),
  serviceSmallDescription: Joi.string().allow("").optional(),
  serviceDescription: Joi.string().allow("").optional(),
  serviceImage: Joi.array().items(Joi.string()),
  servicePrice: Joi.number().required().min(0).default(0),
  serviceTime: Joi.number().min(0).default(0),
  serviceGender: Joi.array().items(Joi.string().valid(...['Male', 'Female', 'Kids', 'Unisex', 'Pets', 'Dog', 'Cat'])),
  serviceTags: Joi.array().items(Joi.string()),
  serviceIsOnSale: Joi.boolean().default(false),
  serviceSalePrice: Joi.number().min(0).default(0),
}).unknown(false);

module.validateService = serviceValidationSchema;
