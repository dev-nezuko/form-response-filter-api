import { Request, Response as ExpressResponse } from 'express';
import { fetchForm } from '../services/fillout.service';
import { FilterClauseType, FormResponse } from '../types/response.interface';
import { filterQuestions } from '../utils/filter';

export const filteredResponse = async (req: Request, res: ExpressResponse) => {
  try {
    const { formId } = req.params;
    const { filters } = req.query;
    const formResponse = (await fetchForm(formId)) as FormResponse;

    const filterList = JSON.parse(filters as string) as FilterClauseType[];

    const responses = formResponse.responses.filter((response) => {
      return filterQuestions(filterList, response);
    });

    res.status(200).json({
      responses,
      totalResponses: responses.length,
      pageCount: formResponse.pageCount,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
};
