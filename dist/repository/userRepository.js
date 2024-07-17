"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const fsService_1 = require("../fsService");
class UserRepository {
    async getAll() {
        return await fsService_1.fsService.getAll();
    }
}
exports.userRepository = new UserRepository();
