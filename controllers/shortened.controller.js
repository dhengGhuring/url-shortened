const short = require("short-uuid");
const Validator = require("fastest-validator");
const Shorten = require("../models/shorten.model");

const v = new Validator();

module.exports = {
  shortenLink: async (req, res, next) => {
    try {
      const schema = {
        link: "string|empty:false",
      };

      const validate = v.validate(req.body, schema);

      if (validate.length) {
        return res.status(400).json({
          status: "error",
          message: validate,
        });
      }
      const { link } = req.body;
      const id = short.generate().substring(0, 9);
      const shorten = await Shorten({ _id: id, link: link });

      shorten.save();
      console.log(shorten);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  },
  redirectLink: async (req, res, next) => {
    try {
      const { id } = req.params;
      const shorten = await Shorten.findOne({ _id: id });

      console.log(shorten);

      res.redirect(shorten.link);
    } catch (error) {
      next(error);
    }
  },
};
