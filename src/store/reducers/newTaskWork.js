const INITIAL_STATE = {
  data: [
    {
      id: 1,
      title: 'Daily',
      description: '09h - Daily sobre o projeto X',
    },
  ],
};

export default function newTaskWork(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_TASK_WORK':
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.registerId,
            title: action.registerTitle,
            description: action.registerDescription,
          },
        ],
      };
    case 'DELETE_TASK_WORK':
      const deleteItemid = action.registerId;
      const NewData = state.data.filter((elemento) => elemento.id !== deleteItemid);
      return {
        ...state,
        data: NewData,
      };
    case 'EDIT_TASK_WORK':
      const editId = action.registerId;
      const title = action.registerTitle;
      const description = action.registerDescription;
      const NewDataEdit = state.data.map((elemento) => {
        if (elemento.id === editId) {
          elemento.title = title;
          elemento.description = description;
        }
        return elemento;
      });
      return {
        ...state,
        data: NewDataEdit,
      };
    case 'SEND_TASK_TO_WORK':
      const newTask = action.registerTaskWork;
      const addTask = state.data.concat(newTask);
      return {
        ...state,
        data: addTask,
      };
    case 'THROW_TASK_WORK':
      const deleteItem = action.throwTaskfromWork;
      const NewDataT = state.data.filter((elemento) => elemento.id !== deleteItem);
      return {
        ...state,
        data: NewDataT,
      };
    case 'SEND_TASK_TO_END_WORK':
      const tasktoEnd = action.sendtasktoend;
      const taskid = action.sendId;
      const dataToend = state.data.filter((elemento) => elemento.id !== taskid).concat(tasktoEnd);
      return {
        ...state,
        data: dataToend,
      };
    default:
      return state || [];
  }
}
