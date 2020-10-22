const { Goods } = require('../db');
const validate = require('../helpers/validationResult');

module.exports = {
  async get(req, res) {
    const perPage = req.query.perPage || 5;
    const currentPage = req.query.page || 1;
    const total = await Goods.count();
    const lastPage = Math.ceil(total / perPage);
    const data = await Goods.findAll({
      limit: perPage,
      offset: perPage * (currentPage - 1),
    });

    return res.send({
      total,
      currentPage,
      perPage,
      lastPage,
      data,
    });
  },

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

  async update(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      res.end();
    }

    const { id } = req.params;
    const { title, expirationTime } = req.body;
    const result = await Goods.findByPk(id);
    result.title = title;
    result.expirationTime = expirationTime;
    await result.save();
    res.send(result);
  },

  async delete(req, res) {},
};
