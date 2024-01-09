const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/service');
const authMiddleware = require('../helpers/middlewares/authMiddleware');
const permissionsMiddleware = require('../helpers/middlewares/permissionMiddleware');
const { commonEnum } = require('../helpers/enums');

const servicePermissions = permissionsMiddleware([commonEnum.userRoles.ADMIN, commonEnum.userRoles.PARTNER]);

router.get('/:id', serviceController.getService);
router.post('/', [authMiddleware, servicePermissions ], serviceController.createService);
router.post('/:id', [authMiddleware, servicePermissions ], serviceController.updateService);


module.exports = router;
