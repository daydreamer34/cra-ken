const fetchTodos = async (): Promise<any> => {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      return response;
   } catch (err) {
      console.log(err);
      throw err;
   }
};

export default fetchTodos;
