const { Unit } = require('../db');
const validate = require('../helpers/validationResult');

module.exports = {
  async get(req, res) {
    const result = await Unit.findAll();
    res.send(result);
  },

  async store(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      return res.end();
    }
    const { shortName, fullName } = req.body;
    const result = await Unit.create({
      shortName,
      fullName,
    });
    return res.send(result);
  },

  async update(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      return res.end();
    }
    const { shortName, fullName } = req.body;
    const result = await Unit.findByPk(req.params.id);
    if (!result) {
      return res.status(400).end();
    }
    result.shortName = shortName;
    result.fullName = fullName;
    await result.save();

    return res.send(result);
  },

  async delete(req, res) {
    const unit = await Unit.findByPk(req.params.id);
    if (!unit) {
      return res.status(400).end();
    }
    const result = await unit.destroy();
    return res.send(result);
  },
};
