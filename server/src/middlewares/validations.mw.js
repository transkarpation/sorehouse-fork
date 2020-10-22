const { body, param } = require('express-validator');
const { Goods } = require('../db');

module.exports = {
  goodsCreateValidators: [
    body('title')
      .isLength({ min: 3 })
      .withMessage('title must be at least 3 characters'),
    body('expirationTime')
      .optional()
      .isInt()
      .withMessage('expirationTime must be int number'),
  ],

  goodsUpdateValidators: [
    body('title')
      .isLength({ min: 3 })
      .withMessage('title must be at least 3 characters'),
    body('expirationTime')
      .optional()
      .isInt()
      .withMessage('expirationTime must be int number'),
    param('id')
      .isInt()
      .custom(async (value) => {
        const result = await Goods.findByPk(value);
        if (!result) {
          return Promise.reject(new Error('Bad request req.params.id'));
        }

        return Promise.resolve();
      }),
  ],
};