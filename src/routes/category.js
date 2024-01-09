const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category');
const authMiddleware = require('../helpers/middlewares/authMiddleware');
const permissionsMiddleware = require('../helpers/middlewares/permissionMiddleware');
const { commonEnum } = require('../helpers/enums');

const categoryPermissions = permissionsMiddleware([commonEnum.userRoles.ADMIN]);

router.get('/', categoryController.getAllCategory);
router.get('/:id', categoryController.getCategory);
router.post('/', [authMiddleware, categoryPermissions ], categoryController.createCategory);
router.post('/:id', [authMiddleware, categoryPermissions ], categoryController.updateCategory);


module.exports = router;
