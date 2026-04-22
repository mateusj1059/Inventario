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
exports.UsersService = void 0;
const users_repository_1 = require("./users.repository");
const bcrypt_1 = require("../../libs/bcrypt");
class UsersService {
    constructor() {
        this.repository = new users_repository_1.UsersRepository();
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield this.repository.findByEmail(data.email);
            if (exists) {
                throw new Error("El usuario ya existe");
            }
            const hashedPassword = yield (0, bcrypt_1.hashPassword)(data.password);
            const user = {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: "user",
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            return yield this.repository.create(user);
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAllUsers();
        });
    }
}
exports.UsersService = UsersService;
