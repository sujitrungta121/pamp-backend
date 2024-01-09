const storeAmenitiesService = require("../services/storeAmenities");
const { validateStoreAmenities } = require("../helpers/validators");
const categoryService = require("../services/category");

exports.createSA = async (req, res) => {
  try {
    debugger
    const data = { ...req.body };

    const { error } = validateStoreAmenities.validate(data, {
      abortEarly: false,
    });

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }

    const sa = await storeAmenitiesService.create(data);

    res.status(201).json(sa);
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ error: "Failed to create store" });
  }
};

exports.updateSA = async (req, res) => {
  try {
    const data = { ...req.body };
    const saId = req.params.id; //store id

    const { error } = validateStoreAmenities.validate(data, {
      abortEarly: false,
    });

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }

    const sa = await storeAmenitiesService.update(saId, data);

    res.status(200).json(sa);
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ error: "Failed to create store" });
  }
};

exports.getAllSA = async (req, res) => {
  try {
    const sa = await categoryService.findAll();

    res.status(200).json(sa);
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ error: "Failed to create store" });
  }
};

exports.getSA = async (req, res) => {
  console.log(getSA,"get sa")
  try {
    const saId = req.params.id; //store id
    const sa = await categoryService.findById(saId);

    res.status(200).json(sa);
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ error: "Failed to create store" });
  }
};
