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

const ModalPersonal = ({ openEditBox, setOpenEditBox, taskId, taskTitle, taskDescripion }) => {
  const [editDescription, setEditDescription] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const dispatch = useDispatch();

  const editTask = (task) => {
    dispatch({
      type: 'EDIT_TASK_PERSONAL',
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
    <ModalOverlay id='modalOverlay' visible={openEditBox}>
      <EditBox id='editBox'>
        <ButtonCloseModal id='buttonCloseModal' onClick={() => setOpenEditBox(false)}>
          <AiOutlineCloseCircle id='AiOutlineCloseCircle' size={'25px'} />
        </ButtonCloseModal>
        <TextforEdit id='textForEdit'> Edite sua tarefa </TextforEdit>
        <LabelforEdit id='labelForEdit' htmlText='Título' htmlFor="title"> Título </LabelforEdit>
        <InputNewTask
          value='Título'
          id='inputNewTaskPersonal'
          type="text"
          name="title"
          onChange={handleInputEdit}
          placeholder={taskTitle}
          maxLength="50"
        />
        <LabelforEdit id='labelForEditPersonal' htmlFor="description"> Descrição </LabelforEdit>
        <InputNewTask
          id='inputNewTaskPersonalDescription'
          type="text"
          name="description"
          onChange={handleEditDescription}
          placeholder={taskDescripion}
          maxLength="100"
        />
        <ButtonAddTask id='buttonAddTask' onClick={() => editTask(taskId)}> Enviar </ButtonAddTask>
      </EditBox>
    </ModalOverlay>
  );
};

export default ModalPersonal;
