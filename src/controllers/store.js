const storeService = require("../services/store");
const { validateStore } = require("../helpers/validators");
const { commonEnum } = require("../helpers/enums");

exports.createStore = async (req, res) => {
  // console.log(req.user,"user created req.user")
  // console.log(req.user.id,"user id")
  try {
    // const user = req.user.id;
    const user="sujit"
    const data = { ...req.body, storeOwner: user };

    // const { error } = validateStore.validate(data, { abortEarly: false });
    const { error } = validateStore.validate(data, { abortEarly: false });


    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }
   
    const store = await storeService.create(data);
    // console.log(store,"store created")

    res.status(201).json(store);
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ error: "Failed to create store" });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const user = req.user.id;
    const userRole = req.userRole;

    const storeId = req.params.id; //store id
    const data = { ...req.body };

    const findStore = await storeService.findById(storeId);

    if (!findStore) {
      return res.status(400).json({ errors: ["Store doesn't exist"] });
    }

    //non-admin / partner checks
    if (userRole != commonEnum.userRoles.ADMIN) {
      //store doesnt belong to partner
      if (findStore.storeOwner != user) {
        return res
          .status(400)
          .json({ errors: ["Store doesn't belong to user."] });
      }

      if (data.storeOwner != user) {
        return res
          .status(400)
          .json({ errors: ["Partners cannot change store owner."] });
      }

      if (data.storeIsActive != findStore.storeIsActive) {
        return res.status(400).json({
          errors: ["Partner cannot change status of store. Contact Support."],
        });
      }
    }

    const { error } = validateStore.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }

    const store = await storeService.update(id, data);

    res.status(201).json(store);
  } catch (error) {
    console.error("Error updating store:", error);
    res.status(500).json({ error: "Failed to update store" });
  }
};

exports.getAllStores = async (req, res) => {
  console.log("get all stores")
  // console.log("get all stores")
  try {
    const findStores = await storeService.findAll();

    if (!findStores) {
      return res.status(400).json({ errors: ["No Stores found"] });
    }
    
    res.status(200).json(stores);
  } catch (error) {
    console.error("Error finding stores:", error);
    res.status(500).json({ error: "Failed to fetch stores" });
  }
};

exports.getAllActiveStores = async (req, res) => {
  
  // console.log(req," req get all active stores")
  const findStores = await storeService.findAllActive();
  console.log(findStores,"find all active")

  try {
    const findStores = await storeService.findAllActive();
    // console.log(findStores,"find stores")

    if (!findStores) {
      return res.status(400).json({ errors: ["No Active Stores found"] });
    }

    res.status(200).json(findStores);
  } 
  catch (error) {
    console.error("Error finding Active stores:", error,"inside the get all activea stores");
    res.status(500).json({ error: "Failed to fetch Active stores" });
  }
};

exports.getAllStoresOfPartner = async (req, res) => {
  try {
    let user = req.user.id;
    const userRole = req.userRole;

    //if admin then fetch stores of by id from param
    if (userRole == commonEnum.userRoles.ADMIN) {
      user = req.params.id;
    }

    const findStores = await storeService.getAllStoresOfUser(user);

    if (!findStores) {
      return res.status(400).json({ errors: ["No Stores found"] });
    }

    res.status(200).json(stores);
  } catch (error) {
    console.error("Error finding stores:", error);
    res.status(500).json({ error: "Failed to fetch stores" });
  }
};

exports.getStore = async (req, res) => {
  try {
    const storeId = req.params.id;

    const findStores = await storeService.findById(storeId);

    if (!findStores) {
      return res.status(400).json({ errors: ["No Store found"] });
    }

    res.status(200).json(stores);
  } catch (error) {
    console.error("Error finding store:", error);
    res.status(500).json({ error: "Failed to fetch store" });
  }
};
