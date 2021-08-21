import { generateAsyncActions, setRequest } from './utils';

const actionMock = 'GET_ALL';

describe('test generateAsyncActions', () => {
   test('test request of generateAsyncActions', () => {
      const { request } = generateAsyncActions(actionMock);
      expect(request).toBe('GET_ALL_REQUEST');
   });

   test('test success of generateAsyncActions', () => {
      const { success } = generateAsyncActions(actionMock);
      expect(success).toBe('GET_ALL_SUCCESS');
   });

   test('test error of generateAsyncActions', () => {
      const { error } = generateAsyncActions(actionMock);
      expect(error).toBe('GET_ALL_ERROR');
   });
});

test('test setRequest', () => {
   const request = setRequest();
   expect(request).toStrictEqual({
      isLoading: true,
      isSuccess: false,
      isError: false,
   });
});
