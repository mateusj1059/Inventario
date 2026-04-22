"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("../../modules/auth/auth.routes"));
const users_routes_1 = __importDefault(require("../../modules/users/users.routes"));
const items_routes_1 = __importDefault(require("../../modules/items/items.routes"));
const recipes_routes_1 = __importDefault(require("../../modules/recipes/recipes.routes"));
const router = (0, express_1.Router)();
router.use("/auth", auth_routes_1.default);
router.use("/users", users_routes_1.default);
router.use("/items", items_routes_1.default);
router.use("/recipes", recipes_routes_1.default);
exports.default = router;
