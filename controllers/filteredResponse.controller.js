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
exports.filteredResponse = void 0;
const fillout_service_1 = require("../services/fillout.service");
const filter_1 = require("../utils/filter");
const filteredResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { formId } = req.params;
        const { filters } = req.query;
        const formResponse = (yield (0, fillout_service_1.fetchForm)(formId));
        const filterList = JSON.parse(filters);
        const responses = formResponse.responses.filter((response) => {
            return (0, filter_1.filterQuestions)(filterList, response);
        });
        res.status(200).json({
            responses,
            totalResponses: responses.length,
            pageCount: formResponse.pageCount,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            error: error,
        });
    }
});
exports.filteredResponse = filteredResponse;
