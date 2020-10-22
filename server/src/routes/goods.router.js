const { Router } = require('express');
const { goodsCreateValidators } = require('../middlewares/validations.mw');
const ctrl = require('../controllers/goods.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', goodsCreateValidators, ctrl.store);

module.exports = router;
