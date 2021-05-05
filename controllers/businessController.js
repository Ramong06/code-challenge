const db = require("../models");

// Defining methods for the businessController
module.exports = {
  findAll: function(req, res) {
    db.Businesses
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModal => res.json(dbModal))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Businesses
      .findById(req.params.id)
      .then(dbModal => res.json(dbModal))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Businesses
      .create(req.body)
      .then(dbModal => res.json(dbModal))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Businesses
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModal => res.json(dbModal))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Businesses
      .findById({ _id: req.params.id })
      .then(dbModal => dbModal.remove())
      .then(dbModal => res.json(dbModal))
      .catch(err => res.status(422).json(err));
  }
};