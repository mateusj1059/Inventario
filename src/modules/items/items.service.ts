import { ItemsRepository } from "./items.repository";
import { Item } from "./items.model";
import { CreateItemDto } from "./items.schema";

export class ItemsService {
  private repository = new ItemsRepository();

  async create(data: CreateItemDto, userId: string): Promise<Item> {
    const now = new Date();

    const item: Item = {
      name: data.name,
      minecraftId: data.minecraftId,
      category: data.category,
      quantity: data.quantity,
      description: data.description,
      isActive: true,
      createdBy: userId,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(item);
  }

  async findAll(): Promise<Item[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Item> {
    const item = await this.repository.findById(id);
    if (!item) {
      throw new Error("Item no encontrado");
    }
    return item;
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}
