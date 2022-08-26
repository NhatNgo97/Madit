const e = require("express");

const middlewareController = {
  paginatedResult: (model) => {
    async (req, res, next) => {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const byVotes = req.query.hot;

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const results = {};
      if (endIndex < (await model.countDocuments().exec())) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
        results.prevous = {
          page: page - 1,
          limit: limit,
        };
      }

      try {
        if (page && limit && byVotes) {
          results.results = await model
            .find()
            .sort({ upVotes: -1 })
            .limit(limit)
            .skip(startIndex)
            .exec();
          res.paginatedResult = results;
          next();
        } else {
          results.results = await model
            .find()
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(startIndex)
            .exec();
          res.paginatedResult = results;
          next();
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };
  },
};

module.exports = middlewareController;
