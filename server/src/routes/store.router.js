const { Router } = require('express');
const {
  storeCreateValidators,
} = require('../middlewares/validations.mw');
const ctrl = require('../controllers/store.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', storeCreateValidators, ctrl.store);
router.put('/:id', storeCreateValidators, ctrl.update);
router.delete('/:id', ctrl.delete);
router.post('/add-goods', ctrl.addGoods);
router.get('/get-items/:id', ctrl.getItems);

module.exports = router;
