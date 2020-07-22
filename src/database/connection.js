const knex = require("knex");
const configuration = require("../../knexfile");

const env = process.env.NODE_ENV;
const config = configuration.development

switch(env){
    case 'teste':
        config = configuration.test
    break;
    case 'production':
        config = configuration.production
    break;
    default:
        config = configuration.development
    break;
}

const connection = knex(config);

module.exports = connection;