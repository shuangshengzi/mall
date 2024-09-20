const express = require('express');
const router = express.Router();

const IndexController = require('../../controllers/wish/index');

router.get('/', IndexController.getList);
router.post('/add', IndexController.add);

module.exports = router;