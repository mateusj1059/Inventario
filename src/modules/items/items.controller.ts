import { Request, Response, NextFunction } from "express";
import { ItemsService } from "./items.service";

export class ItemsController {
  private service = new ItemsService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = (req as any).user?.sub;
      const item = await this.service.create(req.body, userId);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await this.service.findAll();
      res.json(items);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = await this.service.findById(req.params.id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.delete(req.params.id);
      res.json({ message: "Item eliminado del inventario" });
    } catch (error) {
      next(error);
    }
  };
}
