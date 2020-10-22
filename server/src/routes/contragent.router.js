const { Router } = require('express');
const { contragentCreateValidators } = require('../middlewares/validations.mw');
const ctrl = require('../controllers/contragent.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', contragentCreateValidators, ctrl.store);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;
