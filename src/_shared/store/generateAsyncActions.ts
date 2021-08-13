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

export { generateAsyncActions };
