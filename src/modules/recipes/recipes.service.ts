import { RecipesRepository } from "./recipes.repository";
import { Recipe } from "./recipes.model";
import { CreateRecipeDto } from "./recipes.schema";

export class RecipesService {
  private repository = new RecipesRepository();

  async create(data: CreateRecipeDto, userId: string): Promise<Recipe> {
    const now = new Date();

    const recipe: Recipe = {
      name: data.name,
      resultItemId: data.resultItemId,
      resultQuantity: data.resultQuantity,
      recipeType: data.recipeType,
      ingredients: data.ingredients,
      description: data.description,
      isActive: true,
      createdBy: userId,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(recipe);
  }

  async findAll(): Promise<Recipe[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Recipe> {
    const recipe = await this.repository.findById(id);
    if (!recipe) {
      throw new Error("Receta no encontrada");
    }
    return recipe;
  }

  async findByResultItem(minecraftId: string): Promise<Recipe[]> {
    return await this.repository.findByResultItem(minecraftId);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}
