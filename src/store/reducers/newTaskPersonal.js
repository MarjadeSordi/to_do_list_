const INITIAL_STATE = {
  data: [
    {
      id: 1,
      title: 'Corrida',
      description: '07 h - 5km para começar o dia',
    },
  ],
};

export const data = INITIAL_STATE.data;

export default function newTaskPersonal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_TASK_PERSONAL':
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
    case 'DELETE_TASK_PERSONAL':
      const deleteItemid = action.registerId;
      const NewData = state.data.filter((elemento) => elemento.id !== deleteItemid);
      return {
        ...state,
        data: NewData,
      };
    case 'EDIT_TASK_PERSONAL':
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
    case 'SEND_TASK_TO_PERSONAL':
      const newTask = action.registerTaskPersonal;
      const addTask = state.data.concat(newTask);
      return {
        ...state,
        data: addTask,
      };
    case 'THROW_TASK_PERSONAL':
      const deleteItem = action.throwTaskPersonal;
      const NewDataT = state.data.filter((elemento) => elemento.id !== deleteItem);
      return {
        ...state,
        data: NewDataT,
      };
    case 'SEND_TASK_TO_END_PERSONAL':
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
