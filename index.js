const { validate: indicativeValidate } = require('indicative')

const validationMiddleware = (rules) => {
  return async (req, res, next) => {
    const data = req.body;
    try {
      await indicativeValidate(data, rules);
      return next();
    } catch (validationErrors) {
      return res.status(400).send(validationErrors);
    }
  };
};

module.exports = {
  validate: validationMiddleware
};
