const jwt = require("jsonwebtoken");

const middlewareController = {
  verifyToken: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (token) {
        const accessToken = token.split(" ")[1];
        const data = jwt.verify(accessToken, process.env.JWT_ACCESS_KEY);
        req.userId = data.id;
        req.isUserAdmin = data.isAdmin;
        next();
      } else {
        return res.status(401).json({
          sucess: false,
          message: "You're not authenticated. ",
        });
      }
    } catch (err) {
      res.status(403).json("Token is not valid");
    }
  },
  verifyTokenAndUserAuthorization: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.userId === req.params.id.trim() || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You're not allowed to do that");
      }
    });
  },
  verifyTokenAndUserPostAuthorization: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.userId === req.body.user || req.isUserAdmin) {
        next();
      } else {
        return res.status(403).json("You're not allowed to do that!");
      }
    });
  },
  paginatedResult: (model) => {
    return async (req, res, next) => {
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
          res.paginatedResults = results;
          next();
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };
  },
};

module.exports = middlewareController;
