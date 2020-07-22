const knex = require("knex");
const config = require("../../knexfile");

const env = process.env.NODE_ENV || 'development';

//const config = (env === 'test') ? configuration.test : configuration.development;

const db = knex(config(env));

module.exports = db;