const { Sequelize } = require("sequelize");

const HOST = process.env.POSTGRES_HOST ?? "localhost:5432";
const USERNAME = process.env.POSTGRES_USERNAME ?? "root";
const PASSWORD = process.env.POSTGRES_PASSWORD ?? "root";
const DB_NAME = process.env.POSTGRES_DB ?? "foo";

const sequelize = new Sequelize(
  `postgres://${USERNAME}:${PASSWORD}@${HOST}/${DB_NAME}`,
  { dialect: "postgres" }
);

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDatabase();

module.exports = sequelize;
