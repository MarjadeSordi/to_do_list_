import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { ImUserTie } from 'react-icons/im';
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
import ModalPersonal from '../ModalPersonal';

const TodoListPersonal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [openEditBox, setOpenEditBox] = useState(false);
  const tasks = useSelector((state) => state.newTaskPersonal.data);
  const dispatch = useDispatch();

  function registerTask() {
    dispatch({
      type: 'NEW_TASK_PERSONAL',
      registerId: 1 + Math.random(),
      registerTitle: title,
      registerDescription: description,
    });
  }

  const deleteTask = (task) => {
    dispatch({
      type: 'DELETE_TASK_PERSONAL',
      registerId: task.id,
    });
  };

  const sendToEnd = (task) => {
    dispatch({
      type: 'SEND_TASK_TO_END_PERSONAL',
      sendId: task.id,
      sendtasktoend: task,
    });
  };

  const sendTasktoWork = (task) => {
    dispatch({
      type: 'SEND_TASK_TO_WORK',
      registerTaskWork: task,
    });
    dispatch({
      type: 'THROW_TASK_PERSONAL',
      throwTaskPersonal: task.id,
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
          <TitleWork> TAREFAS PESSOAIS </TitleWork>

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
                  <ButtonList onClick={() => sendTasktoWork(task)}>
                    <ImUserTie size={'20px'} />
                    <TextButton> Trabalho </TextButton>
                  </ButtonList>
                </Boxbuttons>
                <ModalPersonal
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

export default TodoListPersonal;
