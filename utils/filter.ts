import {
  FilterClauseType,
  Question,
  Response,
} from '../types/response.interface';

export const filterClauseMatches = (
  filter: FilterClauseType,
  questions: Question[],
) => {
  const question = questions.find((question) => question.id === filter.id);
  switch (filter.condition) {
    case 'equals':
      return question?.value === filter.value;
    case 'does_not_equal':
      return question?.value !== filter.value;
    case 'greater_than':
      return question!.value > filter.value;
    case 'less_than':
      return question!.value < filter.value;

    default: {
      return false;
    }
  }
};

export const filterQuestions = (
  filterList: FilterClauseType[],
  response: Response,
) => {
  return filterList.every(
    (filter) => !filterClauseMatches(filter, response.questions),
  );
};
