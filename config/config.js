module.exports = {
    development: {
      username: process.env.SEQUELIZE_USER,
      password: process.env.SEQUELIZE_PASSWORD,
      database: 'create',
      dialect: 'mysql',
      host: process.env.SEQUELIZE_HOST,
      port: 3306
    },
  };