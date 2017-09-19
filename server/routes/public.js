"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;
publicRouter.get("/simple", (request, response) => {
    response.json({
        text: "Hello Angular 2",
        title: "Greetings.",
    });
});
//# sourceMappingURL=E:/pros/ibm-secure/code-prac/angular2-express-starter-master/dist/server/routes/public.js.map