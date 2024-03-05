"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterQuestions = exports.filterClauseMatches = void 0;
const filterClauseMatches = (filter, questions) => {
    const question = questions.find((question) => question.id === filter.id);
    switch (filter.condition) {
        case 'equals':
            return (question === null || question === void 0 ? void 0 : question.value) === filter.value;
        case 'does_not_equal':
            return (question === null || question === void 0 ? void 0 : question.value) !== filter.value;
        case 'greater_than':
            return question.value > filter.value;
        case 'less_than':
            return question.value < filter.value;
        default: {
            return false;
        }
    }
};
exports.filterClauseMatches = filterClauseMatches;
const filterQuestions = (filterList, response) => {
    return filterList.every((filter) => !(0, exports.filterClauseMatches)(filter, response.questions));
};
exports.filterQuestions = filterQuestions;
