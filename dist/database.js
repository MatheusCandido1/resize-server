"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('db_resize', 'root', '', {
    host: "127.0.0.1",
    dialect: 'mysql'
});
exports.default = sequelize;
