const express = require('express');
const router = express.Router();

const storeController = require('../controllers/store');
const authMiddleware = require('../helpers/middlewares/authMiddleware');
const permissionsMiddleware = require('../helpers/middlewares/permissionMiddleware');
const { commonEnum } = require('../helpers/enums');
const { FIREBASE_KEY_PATH, FIREBASE_DBURL }=require("../config")


const storePermissions = permissionsMiddleware([commonEnum.userRoles.ADMIN, commonEnum.userRoles.PARTNER]);

router.get('/', storeController.getAllActiveStores);
router.get('/all', storeController.getAllStores);
router.get('/:id', storeController.getStore);

router.get('/partner/:id', [authMiddleware, storePermissions ], storeController.getAllStoresOfPartner);
router.get('/partner', [authMiddleware, storePermissions ],  storeController.getAllStoresOfPartner);

// router.post('/', [authMiddleware, storePermissions ], storeController.createStore);
router.post('/',storeController.createStore);

router.post('/:id', [authMiddleware, storePermissions ], storeController.updateStore);


module.exports = router;
