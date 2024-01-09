const categoryService = require("../services/category");
const { validateCategory } = require("../helpers/validators/category");

exports.createCategory = async (req, res) => {
  try {
    const data = { ...req.body };
    const { error } = validateCategory.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }

    const category = await categoryService.create(data);

    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const data = { ...req.body };
    const categoryId = req.params.id; //store id

    const { error } = validateCategory.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }

    const category = await categoryService.update(categoryId, data);

    res.status(200).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const category = await categoryService.findAll();

    res.status(200).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryService.findById(categoryId);

    res.status(200).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
};
