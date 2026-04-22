"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const recipes_repository_1 = require("./recipes.repository");
class RecipesService {
    constructor() {
        this.repository = new recipes_repository_1.RecipesRepository();
    }
    create(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            const recipe = {
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
            return yield this.repository.create(recipe);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.repository.findById(id);
            if (!recipe) {
                throw new Error("Receta no encontrada");
            }
            return recipe;
        });
    }
    findByResultItem(minecraftId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findByResultItem(minecraftId);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(id);
        });
    }
}
exports.RecipesService = RecipesService;
