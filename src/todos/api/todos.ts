const fetchTodos = async (): Promise<Response> => {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      return response;
   } catch (err) {
      throw err;
   }
};

export default fetchTodos;
