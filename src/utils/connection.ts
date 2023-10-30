import {createConnection} from "typeorm";
import Inventory from "../models/Product";
import User from "../models/User";
import Product from "../models/Product";
import Category from "../models/Category";

export default createConnection({
    type: "postgres",
    host: "castor.db.elephantsql.com",
    port: 5432,
    username: "yasdjlfw",
    password: "nlepInoS5oTMGjbxZO0sKNm4cpapPkDk",
    database: "yasdjlfw", // Note the corrected property name
    entities: [Product, User, Category],
    synchronize: true,
    logging: true,
  }).then((connection) => {
    console.log("Connected to the database");
  }).catch((error) => {
    console.error("Error connecting to the database:", error);
  });