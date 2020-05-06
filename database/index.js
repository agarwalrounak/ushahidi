const Knex = require("knex");
const Knexfile = require("../knexfile.js");
const knex = Knex(Knexfile.development);

const {Model} =require("objection");

Model.knex(knex);

module.exports = {
    knex,
    Model
};
