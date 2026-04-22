"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_1 = require("./config/database");
const env_1 = require("./config/env");
(0, database_1.connectDB)();
app_1.app.listen(env_1.env.port, () => {
    console.log(`🚀 Servidor corriendo en puerto ${env_1.env.port}`);
});
