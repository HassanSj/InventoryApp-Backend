import { Request, Response } from "express";
import { getRepository } from "typeorm";
import RequestResponseMappings from "../utils/RequestResponseMappings";
import Product from "../models/Product";
import Category from "../models/Category";

export default {
  addItem: async (req: Request, res: Response) => {
    try {
      const { name, category, price, quantity, value, threshold } = req.body;
      console.log("Received data from client:", req.body);

      if (!name || !category) {
        return res
          .status(400)
          .json({ message: "Name and Category are required." });
      }
      const categoryRepository = getRepository(Category);
      const categoryEntity = await categoryRepository.findOne({
        where: { name: category },
      });

      if (!categoryEntity) {
        return res.status(400).json({ message: "Category not found." });
      }
      const productRepository = getRepository(Product);
      const newProduct = new Product();
      newProduct.name = name;
      newProduct.category = categoryEntity;
      newProduct.price = price;
      newProduct.quantity = quantity;
      newProduct.value = value;
      newProduct.threshold = threshold;
      const savedProduct = await productRepository.save(newProduct);
      return res
        .status(201)
        .json({ message: "Product added", product: savedProduct });
    } catch (error: any) {
      console.error("Error getting response:", error);
      return res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    }
  },
  getAll: async (req: Request, res: Response) => {
    const itemRepository = getRepository(Product);

    try {
      const items = await itemRepository.find({ relations: ["category"] });
      console.log("ITEMSSS", items);
      return res.status(200).json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error retrieving inventory items");
    }
  },
  threshold: async (req: Request, res: Response) => {
    const itemId: any = req.params.id;
    const { threshold } = req.body;

    const itemRepository = getRepository(Product);

    try {
      const inventoryItem = await itemRepository.findOne(itemId);

      if (!inventoryItem) {
        return res.status(404).send("Product item not found");
      }

      inventoryItem.threshold = threshold;

      await itemRepository.save(inventoryItem);

      return res.status(200).json(inventoryItem);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error setting threshold for inventory item");
    }
  },
  updateItem: async (req: Request, res: Response) => {
    const itemId: any = req.params.id;
    const { name, category, price, quantity, value } = req.body;
    console.log("Received data from client:", req.body);

    const itemRepository = getRepository(Product);
    const categoryRepository = getRepository(Category); // Assuming you have a Category entity

    try {
      const inventoryItem = await itemRepository.findOne({
        where: { id: itemId },
      });

      if (!inventoryItem) {
        return res.status(404).send("Product item not found");
      }

      // Find the category by name and get its ID
      const categoryEntity = await categoryRepository.findOne({
        where: { name: category },
      });

      if (!categoryEntity) {
        return res.status(404).send("Category not found");
      }

      inventoryItem.name = name;
      inventoryItem.category = categoryEntity;
      inventoryItem.price = price;
      inventoryItem.quantity = quantity;
      inventoryItem.value = value;

      await itemRepository.save(inventoryItem);

      return res.status(200).json(inventoryItem);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error updating inventory item");
    }
  },
  deleteItem: async (req: Request, res: Response) => {
    const itemId: any = req.params.id;

    const itemRepository = getRepository(Product);

    try {
      const inventoryItem = await itemRepository.findOne({
        where: { id: itemId },
      });

      if (!inventoryItem) {
        return res.status(404).send("Inventory item not found");
      }

      await itemRepository.remove(inventoryItem);

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error deleting inventory item");
    }
  },
};
