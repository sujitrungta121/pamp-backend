// services/categoryService.js

const Category = require('../models/category');

const categoryService = {

    // Create a new category
    async create(data) {
        try {
            const category = new Category(data);
            return await category.save();
        } catch (error) {
            throw error;
        }
    },

    // Get all categories
    async findAll() {
        try {
            return await Category.find().populate('categoryParentCategory');
        } catch (error) {
            throw error;
        }
    },

    // Get all categories which are active
    async findAllActive() {
        try {
            return await Category.find({
                categoryIsActive: true,
            }).populate('categoryParentCategory');
        } catch (error) {
            throw error;
        }
    },

    // Get all categories which are parent
    async findAllParent() {
        try {
            return await Category.find({
                categoryIsSubCategory: false,
            }).populate('categoryParentCategory');
        } catch (error) {
            throw error;
        }
    },

    // Get all categories which are parent and active
    async findAllParentActive() {
        try {
            return await Category.find({
                categoryIsActive: true,
                categoryIsSubCategory: false
            }).populate('categoryParentCategory');
        } catch (error) {
            throw error;
        }
    },

    // Get all categories which are child
    async findAllChild() {
        try {
            return await Category.find({
                categoryIsSubCategory: true,
            }).populate('categoryParentCategory');
        } catch (error) {
            throw error;
        }
    },

    // Get all categories which are child and active
    async findAllChildActive() {
        try {
            return await Category.find({
                categoryIsActive: true,
                categoryIsSubCategory: true,
            }).populate('categoryParentCategory');
        } catch (error) {
            throw error;
        }
    },

    // Get a single category by its ID
    async findById(id) {
        try {
            return await Category.findById(id).populate('categoryParentCategory');
        } catch (error) {
            throw error;
        }
    },

    // Update a category by its ID
    async update(id, data) {
        try {
            return await Category.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw error;
        }
    },

    // Delete a category by its ID
    async delete(id) {
        try {
            return await Category.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

};

module.exports = categoryService;
