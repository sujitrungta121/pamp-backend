// services/storeService.js

const Store = require("../models/store");

const storeService = {
  // Create a new store
  async create(data) {
    try {
      const store = new Store(data);
      return await store.save();
    } catch (error) {
      throw error;
    }
  },

  // Get all stores
  async findAll() {
    console.log("find all")
    try {
      
      return await Store.find()
      .populate("storeServiceList")
      .populate({
        path: "storeServiceList",
        populate: ["serviceCategory", "serviceSubCategory"],
      });
      console.log("in the success find all")
    } catch (error) {
      console.log("error find all ",error)
      throw error;
    }
  },

  // Get all ACTIVE stores
  async findAllActive() {
    try {
      console.log(Store,"Store new")
      return await Store.find({
        storeIsActive: true
      })
        .populate("storeServiceList")
        .populate({
          path: "storeServiceList",
          populate: ["serviceCategory", "serviceSubCategory"],
        });
    } catch (error) {
      throw error;
    }
  },

  // Get all stores
  async getAllStoresOfUser(user) {
    try {
      return await Store.find({ storeUser: user }).populate({
        path: "storeServiceList",
        populate: ["serviceCategory", "serviceSubCategory"],
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // Get a single store by its ID
  async findById(id) {
    try {
      return await Store.findById(id)
        .populate("storeServiceList");
    } catch (error) {
      throw error;
    }
  },

  async getStoreByCordinates(currentX, currentY, radius = 5) {
    try {
      const store = await Store.find({
        $expr: {
          $let: {
            vars: {
              distance: {
                $multiply: [
                  {
                    $multiply: [
                      {
                        $subtract: ["$storeCoordinateX", currentX],
                      },
                      {
                        $subtract: ["$storeCoordinateY", currentY],
                      },
                    ],
                  },
                  Math.pow(Math.PI / 180, 2),
                ],
              },
            },
            in: {
              $lte: ["$distance", Math.pow(radius / 1000, 2)],
            },
          },
        },
      }).populate({
        path: "storeServiceList",
        populate: ["serviceCategory", "serviceSubCategory"],
      });
      if (!store) throw new Error("Store not found");
      return store;
    } catch (error) {
      throw new Error(error.message);
    }
  }, 

  // Update a store by its ID
  async update(id, data) {
    try {
      return await Store.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  },

  // Delete a store by its ID
  async delete(id) {
    try {
      return await Store.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = storeService;
