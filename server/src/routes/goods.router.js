const { Router } = require('express');
const { goodsCreateValidators, goodsUpdateValidators } = require('../middlewares/validations.mw');
const ctrl = require('../controllers/goods.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', goodsCreateValidators, ctrl.store);
router.post('/:id', goodsUpdateValidators, ctrl.update);

module.exports = router;
