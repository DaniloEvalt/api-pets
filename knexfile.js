module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/petstore.sqlite'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    useNullAsDefault: true
  },
};
