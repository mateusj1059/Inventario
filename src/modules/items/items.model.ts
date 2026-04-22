import { ObjectId } from "mongodb";

export type ItemCategory =
  | "block"
  | "tool"
  | "weapon"
  | "armor"
  | "food"
  | "material"
  | "misc";

export interface Item {
  _id?: ObjectId;
  name: string;               // ej: "Diamond Sword"
  minecraftId: string;        // ej: "minecraft:diamond_sword"
  category: ItemCategory;
  quantity: number;
  description?: string;
  isActive: boolean;
  createdBy: string;          // userId
  createdAt: Date;
  updatedAt: Date;
}
