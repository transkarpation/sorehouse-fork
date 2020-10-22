const { Router } = require('express');
const {
  unitCreateValidators,
} = require('../middlewares/validations.mw');
const ctrl = require('../controllers/unit.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', unitCreateValidators, ctrl.store);
router.put('/:id', unitCreateValidators, ctrl.update);
router.delete('/:id', unitCreateValidators, ctrl.delete);

module.exports = router;
