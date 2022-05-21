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
      <Box id ='boxPersonal'>
        <BoxAddTask id='boxPersonalTask'>
          <TitleWork id='titlePersonal'> TAREFAS PESSOAIS </TitleWork>

          <InputNewTask
            id='inputPersonalTitleHome'
            type="text"
            name="title"
            onChange={handleInput}
            placeholder="Título"
            maxLength="50"
          />
          <InputNewTask
            id='inputPersonalDescriptionHome'
            type="text"
            name="title"
            onChange={handleDescription}
            placeholder="Descrição"
            maxLength="100"
          />
          <ButtonAddTask id='addTaskPersonalHome' onClick={registerTask}>
            <AiFillPlusCircle id='circlePersonalHome' size={'20px'} />
            <TextButton id='textButtonPersonalHome'>Adicionar Tarefa</TextButton>
          </ButtonAddTask>
        </BoxAddTask>
        {tasks.map((task) => (
          <ul>
            <ListforTask id='listforTaskPersonak' key={task.id}>
              <BoxList id='boxlistPersonalHome'>
                <TextList id='textListPersonalHome'> {task.title} </TextList>
                <DescriptionBox id='descriptionBoxPersonalHome'>
                  {task.description}
                  <Boxbuttons id='boxButtonPersonalHome'>
                    <ButtonsList id='buttonListPersonalHome' onClick={() => setOpenEditBox(true)}>
                      <AiOutlineEdit  id='outlinePersonalHome' size={'20px'} />
                    </ButtonsList>
                    <ButtonsList id='buttonDeletePersonalHome' onClick={() => deleteTask(task)}>
                      <AiOutlineCloseCircle size={'20px'} />{' '}
                    </ButtonsList>
                  </Boxbuttons>
                </DescriptionBox>
                <Boxbuttons id='boxButtonPersonalHomeSendTask'>
                  <ButtonList id='buttonSendToEndPersonalHome' onClick={() => sendToEnd(task)}>
                    <AiOutlineCaretDown id='outilineCaretPersonalHome' size={'20px'} /> <TextButton id='textFinalPersonalHome'> Final da Lista </TextButton>
                  </ButtonList>
                  <ButtonList id='buttonSendToWorkPersonalHome' onClick={() => sendTasktoWork(task)}>
                    <ImUserTie id='imUserPersonalHome' size={'20px'} />
                    <TextButton id='textWorkPersonalHome'> Trabalho </TextButton>
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
