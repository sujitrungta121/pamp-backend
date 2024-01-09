const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryIsActive: {
    type: Boolean,
    default: true,
  },
  categoryIsSubCategory: {
    type: Boolean,
    default: false,
  },
  categoryParentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
  categoryName: {
    type: String,
    required: true,
  },
  categoryDescription: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
