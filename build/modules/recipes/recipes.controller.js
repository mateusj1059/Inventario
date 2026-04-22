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
exports.RecipesController = void 0;
const recipes_service_1 = require("./recipes.service");
class RecipesController {
    constructor() {
        this.service = new recipes_service_1.RecipesService();
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.sub;
                const recipe = yield this.service.create(req.body, userId);
                res.status(201).json(recipe);
            }
            catch (error) {
                next(error);
            }
        });
        this.findAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const recipes = yield this.service.findAll();
                res.json(recipes);
            }
            catch (error) {
                next(error);
            }
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const recipe = yield this.service.findById(req.params.id);
                res.json(recipe);
            }
            catch (error) {
                next(error);
            }
        });
        this.findByResultItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // ej: GET /api/recipes/result/minecraft:diamond_sword
                const minecraftId = `minecraft:${req.params.itemName}`;
                const recipes = yield this.service.findByResultItem(minecraftId);
                res.json(recipes);
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.delete(req.params.id);
                res.json({ message: "Receta eliminada" });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.RecipesController = RecipesController;
