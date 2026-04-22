import { z } from "zod";

const ingredientSchema = z.object({
  minecraftId: z
    .string()
    .regex(
      /^minecraft:[a-z0-9_]+$/,
      "El ID del ingrediente debe tener formato minecraft:nombre_item"
    ),
  quantity: z
    .number({ invalid_type_error: "La cantidad debe ser un número" })
    .int("La cantidad debe ser un entero")
    .min(1, "La cantidad mínima es 1")
    .max(64, "La cantidad máxima por stack es 64"),
});

export const createRecipeSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener mínimo 2 caracteres")
    .max(100, "El nombre es muy largo"),

  resultItemId: z
    .string()
    .regex(
      /^minecraft:[a-z0-9_]+$/,
      "El ID resultado debe tener formato minecraft:nombre_item"
    ),

  resultQuantity: z
    .number({ invalid_type_error: "La cantidad debe ser un número" })
    .int("Debe ser un entero")
    .min(1, "Mínimo produce 1 item"),

  recipeType: z.enum(["crafting", "smelting", "stonecutting", "brewing"], {
    errorMap: () => ({ message: "Tipo de receta inválido" }),
  }),

  ingredients: z
    .array(ingredientSchema)
    .min(1, "La receta debe tener al menos un ingrediente")
    .max(9, "Una receta no puede tener más de 9 ingredientes"),

  description: z.string().max(300, "La descripción es muy larga").optional(),
});

export type CreateRecipeDto = z.infer<typeof createRecipeSchema>;
