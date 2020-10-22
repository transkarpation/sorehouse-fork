const { Router } = require('express');
const ctrl = require('../controllers/contragent.controller');

const router = Router();

router.get('/', ctrl.get);
router.post('/', ctrl.store);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;
