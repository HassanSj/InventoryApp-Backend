import express, { Express, Request, Response } from "express";
import CategoryController from "../controller/CategoryController";

const CategoryRoutes: Express = express();
CategoryRoutes.post("/addCategory", CategoryController.addCategory);
CategoryRoutes.get("/get", CategoryController.getAll);
CategoryRoutes.put("/updateCategory/:id", CategoryController.updateCategory);
CategoryRoutes.delete("/deleteCategory/:id", CategoryController.deleteCategory);
export default CategoryRoutes;
