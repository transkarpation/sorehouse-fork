const { Store } = require('../db');
const validate = require('../helpers/validationResult');

module.exports = {
  async get(req, res) {
    const result = await Store.findAll();
    res.send({ result });
  },

  async store(req, res) {
    const validResult = validate(req, res);
    if (!validResult) {
      return res.end();
    }

    const result = await Store.create({
      name: req.body.name,
    });

    return res.send(result);
  },

  async update(req, res) {
    const validResult = validate(req, res);
    if (!validResult) {
      return res.end();
    }

    const store = await Store.findByPk(req.params.id);
    store.name = req.body.name;
    await store.save();

    return res.send(store);
  },

  async delete(req, res) {
    const { id } = req.params;
    const store = await Store.findByPk(id);
    const result = await store.destroy();
    res.send(result);
  },
};
