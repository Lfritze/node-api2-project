const express = require("express");

const router = express.Router();

const db = require("../data/db.js");

router.use(express.json());

// GET to return array of data

router.get("/", (req, res) => {
  console.log(req.query);
  db.find(req.query)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log("Error in the GET", error);
      res.status(500).json({
        message: "Error Retrieving Data...see router.get"
      });
    });
});

module.exports = router;
