"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItemSchema = void 0;
const zod_1 = require("zod");
exports.createItemSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(2, "El nombre debe tener mínimo 2 caracteres")
        .max(100, "El nombre es muy largo"),
    minecraftId: zod_1.z
        .string()
        .min(3, "El ID de Minecraft es obligatorio")
        .regex(/^minecraft:[a-z0-9_]+$/, "El ID debe tener formato minecraft:nombre_item"),
    category: zod_1.z.enum(["block", "tool", "weapon", "armor", "food", "material", "misc"], {
        errorMap: () => ({ message: "Categoría inválida" }),
    }),
    quantity: zod_1.z
        .number({ invalid_type_error: "La cantidad debe ser un número" })
        .int("La cantidad debe ser un entero")
        .min(1, "La cantidad mínima es 1")
        .max(64, "La cantidad máxima por stack es 64"),
    description: zod_1.z.string().max(300, "La descripción es muy larga").optional(),
});
