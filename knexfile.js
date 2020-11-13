require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: {directory: './seeds'},
  },
  test: {
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: {directory: './seeds'},
    pool: {
      min: 2,
      max: 10
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: {directory: './seeds'},
    pool: {
      min: 2,
      max: 10
    },
  },
};