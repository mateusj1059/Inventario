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
exports.ItemsService = void 0;
const items_repository_1 = require("./items.repository");
class ItemsService {
    constructor() {
        this.repository = new items_repository_1.ItemsRepository();
    }
    create(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            const item = {
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
            return yield this.repository.create(item);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.repository.findById(id);
            if (!item) {
                throw new Error("Item no encontrado");
            }
            return item;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(id);
        });
    }
}
exports.ItemsService = ItemsService;
