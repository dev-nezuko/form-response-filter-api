export interface FilterClauseType {
  id: string;
  condition: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than';
  value: number | string;
}

export interface Question {
  id: string;
  name: string;
  type: string | number;
  value: string | number;
}

export interface Response {
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  questions: Question[];
  calculations: any[];
  urlParameters: string[];
  quiz: object;
  documents: string[];
}

export interface FormResponse {
  responses: Response[];
  totalResponses: number;
  pageCount: number;
}
