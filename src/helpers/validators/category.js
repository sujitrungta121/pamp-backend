const Joi = require("joi");

const categoryValidationSchema = Joi.object({
  categoryIsActive: Joi.boolean().default(true),
  categoryIsSubCategory: Joi.boolean().default(false),
  categoryParentCategory: Joi.string().allow(null).default(null),
  categoryName: Joi.string().required(),
  categoryDescription: Joi.string().required(),
}).unknown(false);

module.validateCategory = categoryValidationSchema;
