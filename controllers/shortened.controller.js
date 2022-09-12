const short = require("short-uuid");

module.exports = {
  shortenLink: async (req, res, next) => {
    try {
      const id = short.generate().substring(0, 9);
      res.json({ id });
    } catch (error) {
      next(error);
    }
  },
};
