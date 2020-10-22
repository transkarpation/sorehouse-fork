const { Goods } = require('../db');
const validate = require('../helpers/validationResult');

module.exports = {
  async get(req, res) {},

  async store(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      return res.end();
    }

    const { title, expirationTime } = req.body;
    const result = await Goods.create({
      title,
      expirationTime,
      GoodsCategoryId: req.body.categoryId,
      UnitId: req.body.unitId,
    });

    return res.send(result.toJSON());
  },

  async update(req, res) {},

  async delete(req, res) {},
};
