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
      <Box>
        <BoxAddTask>
          <TitleWork> TAREFAS DE TRABALHO </TitleWork>

          <InputNewTask
            type="text"
            name="title"
            onChange={handleInput}
            placeholder="Título"
            maxLength="50"
          />
          <InputNewTask
            type="text"
            name="title"
            onChange={handleDescription}
            placeholder="Descrição"
            maxLength="100"
          />
          <ButtonAddTask onClick={registerTask}>
            <AiFillPlusCircle size={'20px'} />
            <TextButton>Adicionar Tarefa</TextButton>
          </ButtonAddTask>
        </BoxAddTask>
        {tasks.map((task) => (
          <ul>
            <ListforTask key={task.id}>
              <BoxList>
                <TextList> {task.title} </TextList>
                <DescriptionBox>
                  {task.description}
                  <Boxbuttons>
                    <ButtonsList onClick={() => setOpenEditBox(true)}>
                      <AiOutlineEdit size={'20px'} />
                    </ButtonsList>
                    <ButtonsList onClick={() => deleteTask(task)}>
                      <AiOutlineCloseCircle size={'20px'} />{' '}
                    </ButtonsList>
                  </Boxbuttons>
                </DescriptionBox>
                <Boxbuttons>
                  <ButtonList onClick={() => sendToEnd(task)}>
                    <AiOutlineCaretDown size={'20px'} /> <TextButton> Final da Lista </TextButton>
                  </ButtonList>
                  <ButtonList onClick={() => sendTasktoPersonal(task)}>
                    <FaHouseUser size={'20px'} />
                    <TextButton> Pessoal </TextButton>
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
