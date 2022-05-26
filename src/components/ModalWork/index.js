import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonAddTask,
  ButtonCloseModal,
  EditBox,
  InputNewTask,
  LabelforEdit,
  ModalOverlay,
  TextforEdit,
} from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ModalWork = ({ openEditBox, setOpenEditBox, taskId, taskTitle, taskDescripion }) => {
  const [editDescription, setEditDescription] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const dispatch = useDispatch();

  const editTask = (taskId) => {
    dispatch({
      type: 'EDIT_TASK_WORK',
      registerId: taskId,
      registerTitle: editTitle,
      registerDescription: editDescription,
    });
    setOpenEditBox(false);
  };

  function handleInputEdit(e) {
    e.preventDefault();
    setEditTitle(e.target.value);
  }

  function handleEditDescription(e) {
    e.preventDefault();
    setEditDescription(e.target.value);
  }

  return (
    <ModalOverlay id='modalOverlayTwo' visible={openEditBox}>
      <EditBox id='editBoxTwo'>
        <ButtonCloseModal id='buttonCloseModalTwo' onClick={() => setOpenEditBox(false)}>
          <AiOutlineCloseCircle id='aiOutlineCloseCircleTwo' size={'25px'} />
        </ButtonCloseModal>
        <TextforEdit id='textForEditTwo'> Edite sua tarefa </TextforEdit>
        <LabelforEdit id='labelForEditTwo' htmlFor="title"> Título </LabelforEdit>
        <InputNewTask
          id='InputNewTaskWork'
          type="text"
          name="title"
          onChange={handleInputEdit}
          placeholder={taskTitle}
          maxLength="50"
        />
        <LabelforEdit id='labelForEditWork' htmlFor="description"> Descrição </LabelforEdit>
        <InputNewTask
          id='inputNewTaskWorkDescription'
          type="text"
          name="description"
          onChange={handleEditDescription}
          placeholder={taskDescripion}
          maxLength="100"
        />
        <ButtonAddTask id='buttonAddTaskWork' onClick={() => editTask(taskId)}> Enviar </ButtonAddTask>
      </EditBox>
    </ModalOverlay>
  );
};

export default ModalWork;
