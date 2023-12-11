// reducers.js
import { FETCH_QUESTION_SUCCESS, FETCH_QUESTION_FAILURE, ANSWER_QUESTION } from './actions';


const initialState = {
  question: null,
  error: null,
};

const quizReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
        error: null,
      };
    case FETCH_QUESTION_FAILURE:
      return {
        ...state,
        question: null,
        error: action.payload,
      };
    case ANSWER_QUESTION:
      // Handle answer logic here
      return state;
    default:
      return state;
  }
};

export default quizReducer;
