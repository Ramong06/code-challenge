const router = require("express").Router();
const db = require("../models")

router.get('/api/businesses', (req, res) => {
    db.Businesses.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.put('/api/businesses/:id', (req, res) => {
	db.Businesses.updateOne(
		{ _id: req.params.id },
		{ $push: { rating: req.body.rating } }
	)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;