import express, { Express, Request, Response } from "express";
import InventoryController from "../controller/InventoryController";

const inventoryRoutes: Express = express();
inventoryRoutes.post("/add", InventoryController.addItem);
inventoryRoutes.get("/get", InventoryController.getAll);
inventoryRoutes.put("/updateinventory/:id", InventoryController.updateItem);
inventoryRoutes.delete("/deleteinventory/:id", InventoryController.deleteItem);
inventoryRoutes.delete("/setThreshold/:id", InventoryController.threshold);
export default inventoryRoutes;
