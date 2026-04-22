import { Request, Response, NextFunction } from "express";
import { RecipesService } from "./recipes.service";

export class RecipesController {
  private service = new RecipesService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = (req as any).user?.sub;
      const recipe = await this.service.create(req.body, userId);
      res.status(201).json(recipe);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const recipes = await this.service.findAll();
      res.json(recipes);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recipe = await this.service.findById(req.params.id);
      res.json(recipe);
    } catch (error) {
      next(error);
    }
  };

  findByResultItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // ej: GET /api/recipes/result/minecraft:diamond_sword
      const minecraftId = `minecraft:${req.params.itemName}`;
      const recipes = await this.service.findByResultItem(minecraftId);
      res.json(recipes);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.delete(req.params.id);
      res.json({ message: "Receta eliminada" });
    } catch (error) {
      next(error);
    }
  };
}
