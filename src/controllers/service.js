const serviceService = require("../services/service");
const storeService = require("../services/store");
const { validateService } = require("../helpers/validators");

exports.createService = async (req, res) => {
  try {
    let user = req.user.id;
    const userRole = req.userRole;
    const data = { ...req.body };

    //if admin then fetch stores of by id from param
    if (userRole == userRoles.ADMIN) {
      user = req.params.id;
    }

    const { error } = validateService.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }

    //check if store belongs to the user
    const store = storeService.findById(data?.serviceStore);

    if (!store) {
      return res.status(400).json({ errors: ["Store doesn't exists"] });
    }

    if (store?.storeOwner != user) {
      return res
        .status(400)
        .json({ errors: ["Store doesn't belong to the specified user"] });
    }

    const service = await serviceService.create(data);

    res.status(201).json(service);
  } catch (error) {
    console.error("Error creating Service:", error);
    res.status(500).json({ error: "Failed to create Service" });
  }
};

exports.updateService = async (req, res) => {
  try {
    let user = req.user.id;
    const userRole = req.userRole;
    const data = { ...req.body };

    const serviceId = req.params.id; //store id

    const { error } = validateService.validate(data, { abortEarly: false });

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    }

    //if valid service
    const service = await service.findById(serviceId);

    if (!service) {
      return res.status(400).json({ errors: ["Service doesn't exists"] });
    }

    //if not admin
    if (userRole != userRoles.ADMIN) {
      //if store is being changed
      if (data?.serviceStore != service.serviceStore) {
        return res
          .status(400)
          .json({ errors: ["Cannot change parent store."] });
      }
    }

    //check if store belongs to the user
    const store = storeService.findById(data?.serviceStore);

    if (!store) {
      return res.status(400).json({ errors: ["Store doesn't exists"] });
    }

    if (store?.storeOwner != user) {
      return res
        .status(400)
        .json({ errors: ["Store doesn't belong to the specified user"] });
    }

    const serviceUpdate = await serviceService.update(sserviceId, data);

    res.status(200).json(serviceUpdate);
  } catch (error) {
    console.error("Error creating Service:", error);
    res.status(500).json({ error: "Failed to create Service" });
  }
};

exports.getService = async (req, res) => {
  try {
    const serviceId = req.params.id;

    const service = await serviceService.create(serviceId);

    res.status(201).json(service);
  } catch (error) {
    console.error("Error creating Service:", error);
    res.status(500).json({ error: "Failed to create Service" });
  }
};
