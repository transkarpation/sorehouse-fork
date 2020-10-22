const { Router } = require('express');
const {
  goodsCreateValidators,
  goodsUpdateValidators,
  goodsDeleteValidators,
} = require('../middlewares/validations.mw');
const ctrl = require('../controllers/goods.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', goodsCreateValidators, ctrl.store);
router.put('/:id', goodsUpdateValidators, ctrl.update);
router.delete('/:id', goodsDeleteValidators, ctrl.delete);

module.exports = router;
