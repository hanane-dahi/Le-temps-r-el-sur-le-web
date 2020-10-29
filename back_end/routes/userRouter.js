const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("Hi guys");
 
});

module.exports = router;