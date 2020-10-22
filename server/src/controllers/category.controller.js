const { Category } = require('../db');
const validate = require('../helpers/validationResult');

module.exports = {
  async get(req, res) {
    const result = await Category.findAll();
    res.send(result);
  },

  async store(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      return res.end();
    }
    const { name } = req.body;
    const result = await Category.create({
      name,
    });
    return res.send(result);
  },

  async update(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      return res.end();
    }
    const { name } = req.body;
    const result = await Category.findByPk(req.params.id);
    if (!result) {
      return res.status(400).end();
    }
    result.name = name;
    await result.save();

    return res.send(result);
  },

  async delete(req, res) {
    const unit = await Category.findByPk(req.params.id);
    if (!unit) {
      return res.status(400).end();
    }
    const result = await unit.destroy();
    return res.send(result);
  },
};
