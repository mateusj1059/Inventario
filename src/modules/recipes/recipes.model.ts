import { ObjectId } from "mongodb";

export type RecipeType = "crafting" | "smelting" | "stonecutting" | "brewing";

export interface RecipeIngredient {
  minecraftId: string;  // ej: "minecraft:diamond"
  quantity: number;
}

export interface Recipe {
  _id?: ObjectId;
  name: string;                     // ej: "Diamond Sword"
  resultItemId: string;             // minecraft:diamond_sword
  resultQuantity: number;           // cuántos produce la receta
  recipeType: RecipeType;
  ingredients: RecipeIngredient[];  // materiales necesarios
  description?: string;
  isActive: boolean;
  createdBy: string;                // userId
  createdAt: Date;
  updatedAt: Date;
}
