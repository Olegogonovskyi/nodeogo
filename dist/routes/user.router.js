"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userControllers_1 = require("../errors/controllers/userControllers");
const router = (0, express_1.Router)();
router.get('/', userControllers_1.userControllers.getAll);
exports.userRouter = router;
