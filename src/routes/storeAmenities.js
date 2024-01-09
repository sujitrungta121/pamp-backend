const express = require('express');
const router = express.Router();

const saController = require('../controllers/storeAmenities');
const authMiddleware = require('../helpers/middlewares/authMiddleware');
const permissionsMiddleware = require('../helpers/middlewares/permissionMiddleware');
const { commonEnum } = require('../helpers/enums');

const saPermissions = permissionsMiddleware([commonEnum.userRoles.ADMIN]);

router.get('/', saController.getAllSA);
router.get('/:id', saController.getSA);
router.post('/', [authMiddleware, saPermissions ], saController.createSA);
router.post('/:id', [authMiddleware, saPermissions ], saController.updateSA);


module.exports = router;
