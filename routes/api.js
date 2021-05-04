const router = require("express").Router();
const db = require("../models");

router.get('/api/businesses', (req, res) => {
    db.Businesses.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(404).json(err);
    });
});

router.put('/api/businesses/:id', (req, res) => {
	db.Businesses.updateOne(
		{ _id: req.params.id },
		{ $push: { likeCount: req.body.likeCount } }
	)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

module.exports = router;