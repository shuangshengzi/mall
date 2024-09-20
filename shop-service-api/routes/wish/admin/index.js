const express = require('express');
const router = express.Router();
const AdminController = require('../../../controllers/wish/admin');

router.post('/login', AdminController.login);
router.get('/list', AdminController.list);
router.get('/:id', AdminController.getItem);
router.post('/add', AdminController.add);
router.put('/update', AdminController.update);
router.delete('/delete', AdminController.remove);

module.exports = router;