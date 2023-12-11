export const FETCH_QUESTION = 'FETCH_QUESTION';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_FAILURE = 'FETCH_QUESTION_FAILURE';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';

// action creators
export const fetchQuestion = () => ({ type: FETCH_QUESTION });
export const fetchQuestionSuccess = (question : any) => ({ type: FETCH_QUESTION_SUCCESS, payload: question });
export const fetchQuestionFailure = (error  : any ) => ({ type: FETCH_QUESTION_FAILURE, payload: error });

export const answerQuestion = (answer  : any ) => ({ type: ANSWER_QUESTION, payload: answer });