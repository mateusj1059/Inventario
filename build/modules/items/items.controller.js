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
exports.ItemsController = void 0;
const items_service_1 = require("./items.service");
class ItemsController {
    constructor() {
        this.service = new items_service_1.ItemsService();
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.sub;
                const item = yield this.service.create(req.body, userId);
                res.status(201).json(item);
            }
            catch (error) {
                next(error);
            }
        });
        this.findAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.service.findAll();
                res.json(items);
            }
            catch (error) {
                next(error);
            }
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.service.findById(req.params.id);
                res.json(item);
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.delete(req.params.id);
                res.json({ message: "Item eliminado del inventario" });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ItemsController = ItemsController;
