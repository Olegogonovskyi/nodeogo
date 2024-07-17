"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userRepository_1 = require("../repository/userRepository");
class UserService {
    async getAll() {
        return await userRepository_1.userRepository.getAll();
    }
}
exports.userService = new UserService();
