import { Actions } from './actions';

type ActionType<T extends Actions> = {
   request: `${T}_REQUEST`;
   success: `${T}_SUCCESS`;
   error: `${T}_ERROR`;
};

const generateAsyncActions = (action: Actions): ActionType<Actions> => {
   return {
      request: `${action}_REQUEST`,
      success: `${action}_SUCCESS`,
      error: `${action}_ERROR`,
   };
};

function setRequest<T>(state: T) {
   return {
      ...state,
      isLoading: true,
      isSuccess: false,
      isError: false,
   };
}

function setResponse<T, K>(state: T, data: K) {
   return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      ...data,
   };
}

export { generateAsyncActions, setRequest, setResponse };
