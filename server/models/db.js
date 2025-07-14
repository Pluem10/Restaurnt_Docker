import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.PORT,
  pool: dbConfig.pool,
});
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connoection has been etablished");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};
testConnection();
export default sequelize;
