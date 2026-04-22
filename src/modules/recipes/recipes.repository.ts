import { getDb } from "../../config/database";
import { Recipe } from "./recipes.model";
import { ObjectId } from "mongodb";

export class RecipesRepository {
  private collection() {
    return getDb().collection<Recipe>("recipes");
  }

  // 🟢 CREATE
  async create(data: Recipe): Promise<Recipe> {
    const result = await this.collection().insertOne(data);
    return { _id: result.insertedId, ...data };
  }

  // 🟢 GET ALL (solo activas)
  async findAll(): Promise<Recipe[]> {
    return await this.collection().find({ isActive: true }).toArray();
  }

  // 🟢 GET BY ID
  async findById(id: string): Promise<Recipe | null> {
    if (!ObjectId.isValid(id)) {
      throw new Error("ID inválido");
    }
    return await this.collection().findOne({ _id: new ObjectId(id) });
  }

  // 🟢 GET BY RESULT ITEM — útil para buscar cómo craftear un item
  async findByResultItem(minecraftId: string): Promise<Recipe[]> {
    return await this.collection()
      .find({ resultItemId: minecraftId, isActive: true })
      .toArray();
  }

  // 🟢 DELETE
  async delete(id: string) {
    if (!ObjectId.isValid(id)) {
      throw new Error("ID inválido");
    }
    return await this.collection().deleteOne({ _id: new ObjectId(id) });
  }
}
