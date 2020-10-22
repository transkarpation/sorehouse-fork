const { Router } = require('express');
const {
  categoryCreateValidators,
} = require('../middlewares/validations.mw');
const ctrl = require('../controllers/category.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', categoryCreateValidators, ctrl.store);
router.put('/:id', categoryCreateValidators, ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;
