"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const filteredResponse_controller_1 = require("./controllers/filteredResponse.controller");
const app = (0, express_1.default)();
app.get('/:formId/filteredResponses', filteredResponse_controller_1.filteredResponse);
app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});
