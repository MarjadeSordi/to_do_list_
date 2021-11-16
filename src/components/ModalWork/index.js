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
    <ModalOverlay visible={openEditBox}>
      <EditBox>
        <ButtonCloseModal onClick={() => setOpenEditBox(false)}>
          <AiOutlineCloseCircle size={'25px'} />
        </ButtonCloseModal>
        <TextforEdit> Edite sua tarefa </TextforEdit>
        <LabelforEdit htmlFor="title" /> Título
        <InputNewTask
          type="text"
          name="title"
          onChange={handleInputEdit}
          placeholder={taskTitle}
          maxLength="50"
        />
        <LabelforEdit htmlFor="description" /> Descrição
        <InputNewTask
          type="text"
          name="description"
          onChange={handleEditDescription}
          placeholder={taskDescripion}
          maxLength="100"
        />
        <ButtonAddTask onClick={() => editTask(taskId)}> Enviar </ButtonAddTask>
      </EditBox>
    </ModalOverlay>
  );
};

export default ModalWork;
