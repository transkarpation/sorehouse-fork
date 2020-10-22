const validate = require('../helpers/validationResult');
const { Contragent } = require('../db');

module.exports = {
  async get(req, res) {
    const result = await Contragent.findAll();
    res.send(result);
  },

  async store(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      return res.end();
    }
    const {
      firstName,
      lastName,
      email,
      company,
      companyAdress,
      phone,
    } = req.body;
    const result = await Contragent.create({
      firstName,
      lastName,
      email,
      company,
      companyAdress,
      phone,
    });
    return res.send(result);
  },

  async update(req, res) {
    const validateRes = validate(req, res);
    if (!validateRes) {
      return res.end();
    }

    const result = await Contragent.findByPk(req.params.id);
    if (!result) {
      return res.status(400).end();
    }
    const {
      firstName,
      lastName,
      email,
      company,
      companyAdress,
      phone,
    } = req.body;

    result.firstName = firstName;
    result.lastName = lastName;
    result.email = email;
    result.company = company;
    result.companyAdress = companyAdress;
    result.phone = phone;

    await result.save();

    return res.send(result);
  },

  async delete(req, res) {
    const result = await Contragent.findByPk(req.params.id);
    if (!result) {
      return res.status(400).end();
    }
    const dbResult = await result.destroy();
    return res.send(dbResult);
  },
};
