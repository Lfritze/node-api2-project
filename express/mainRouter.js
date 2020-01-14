const express = require("express");

const router = express.Router();

const db = require("../data/db.js");

router.use(express.json());

// ***NOTES server.use("./api/posts", mainRouter); ***NOTES ***

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

// When the client makes a GET request to /api/posts/:id

router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(post => {
      console.log(post);
      if (post[0]) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

// POST Request
router.post("/", (req, res) => {
  const dbData = req.body;
  console.log(dbData);
  if (!dbData.title || !dbData.contents) {
    res
      .status(400)
      .json({
        errorMessage: "Please provide title and contents for the post."
      });
  } else {
    db.insert(dbData)
      .then(post => {
        res.status(201).json({ ...post, ...dbData });
      })
      .catch(err => {
        console.log("POST Req Err", err);
        res
          .status(500)
          .json({
            error: "There was an error while saving the post to the database"
          });
      });
  }
});

module.exports = router;
