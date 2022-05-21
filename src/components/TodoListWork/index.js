import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FaHouseUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import ModalWork from '../ModalWork';
import {
  Box,
  BoxAddTask,
  Boxbuttons,
  BoxList,
  ButtonAddTask,
  ButtonList,
  ButtonsList,
  DescriptionBox,
  InputNewTask,
  ListforTask,
  TextButton,
  TextList,
  TitleWork,
} from './styles';

const TodoListWork = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [openEditBox, setOpenEditBox] = useState(false);

  const tasks = useSelector((state) => state.newTaskWork.data);
  const dispatch = useDispatch();

  const registerTask = () => {
    dispatch({
      type: 'NEW_TASK_WORK',
      registerId: 1 + Math.random(),
      registerTitle: title,
      registerDescription: description,
    });
  };

  const deleteTask = (task) => {
    dispatch({
      type: 'DELETE_TASK_WORK',
      registerId: task.id,
    });
  };

  const sendTasktoPersonal = (task) => {
    dispatch({
      type: 'SEND_TASK_TO_PERSONAL',
      registerTaskPersonal: task,
    });
    dispatch({
      type: 'THROW_TASK_WORK',
      throwTaskfromWork: task.id,
    });
  };

  const sendToEnd = (task) => {
    dispatch({
      type: 'SEND_TASK_TO_END_PERSONAL',
      sendId: task.id,
      sendtasktoend: task,
    });
  };

  function handleInput(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    e.preventDefault();
    setDescription(e.target.value);
  }

  return (
    <>
      <Box id='boxWorkHome'>
        <BoxAddTask id='boxAddTaskWorkHome'>
          <TitleWork id='titleWork'> TAREFAS DE TRABALHO </TitleWork>

          <InputNewTask
            id='inputNewTaskTitleWorkHome'
            type="text"
            name="title"
            onChange={handleInput}
            placeholder="Título"
            maxLength="50"
          />
          <InputNewTask
            id='inputNewTaskDescriptionWorkHome'
            type="text"
            name="title"
            onChange={handleDescription}
            placeholder="Descrição"
            maxLength="100"
          />
          <ButtonAddTask id='buttonAddTaskWorkHome' onClick={registerTask}>
            <AiFillPlusCircle id='circleWorkHome' size={'20px'} />
            <TextButton id='textButtonAddTaskWorkHome'>Adicionar Tarefa</TextButton>
          </ButtonAddTask>
        </BoxAddTask>
        {tasks.map((task) => (
          <ul>
            <ListforTask id='listForTaskWorkHome' key={task.id}>
              <BoxList id='boxListWorkHome'>
                <TextList id='taskTitleWorkHome'> {task.title} </TextList>
                <DescriptionBox id='taskDescriptionBoxWorkHome'>
                  {task.description}
                  <Boxbuttons id='boxButtonListWorkHome'>
                    <ButtonsList id='buttonListWorkHome' onClick={() => setOpenEditBox(true)}>
                      <AiOutlineEdit size={'20px'} />
                    </ButtonsList>
                    <ButtonsList id='buttonDeleteWorkHome' onClick={() => deleteTask(task)}>
                      <AiOutlineCloseCircle id='circleDeleteWorkHome' size={'20px'} />{' '}
                    </ButtonsList>
                  </Boxbuttons>
                </DescriptionBox>
                <Boxbuttons id='boxButtonsSendTaskWorkHome'>
                  <ButtonList id='buttonSendToEndWorkHome' onClick={() => sendToEnd(task)}>
                    <AiOutlineCaretDown id='outlineCaretWorkHome' size={'20px'} /> <TextButton> Final da Lista </TextButton>
                  </ButtonList>
                  <ButtonList id='buttonSendToPersonalWorkHome' onClick={() => sendTasktoPersonal(task)}>
                    <FaHouseUser id='userWorkHome'size={'20px'} />
                    <TextButton id='personalTextWorkHome'> Pessoal </TextButton>
                  </ButtonList>
                </Boxbuttons>
                <ModalWork
                  openEditBox={openEditBox}
                  setOpenEditBox={setOpenEditBox}
                  taskId={task.id}
                  taskTitle={task.title}
                  taskDescripion={task.description}
                />
              </BoxList>
            </ListforTask>
          </ul>
        ))}
      </Box>
    </>
  );
};

export default TodoListWork;
