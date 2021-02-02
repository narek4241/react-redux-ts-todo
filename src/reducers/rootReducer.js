const initState = {
  todos: [
    {
      id: 1,
      content: 'delectus aut autem',
    },
    {
      id: 2,
      content: 'quis ut nam facilis et officia qui',
    },
    {
      id: 3,
      content: 'fugiat veniam minus',
    },
    {
      id: 4,
      content: 'et porro tempora',
    },
    {
      id: 5,
      content: 'laboriosam mollitia et enim',
    },
  ],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const randomId = Math.round(Math.random() * 100000);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: randomId,
            content: action.payload.content,
          },
        ],
      };
      break;
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
      break;

    default:
      break;
  }

  return state;
};

export default rootReducer;
