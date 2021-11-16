import styled from 'styled-components';

export const ModalOverlay = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditBox = styled.div`
  position: absolute;
  z-index: 12;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  width: 400px;
  height: 330px;
  top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonCloseModal = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  left: 80%;
`;

export const InputEdit = styled.input`
  background-color: transparent;
  border: 1px solid #696969;
  margin: 2%;
  border-radius: 8px;
  width: 80%;
  padding: 8px;
  :: placeholder {
    color: #696969;
    font-family: 'Roboto', sans-serif;
  }
`;

export const TextforEdit = styled.h3`
  text-align: center;
  color: #696969;
  font-family: 'Bebas Neue', cursive;
  font-size: 24px;
`;

export const LabelforEdit = styled.label`
  color: #696969;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;

export const ButtonAddTask = styled.button`
  background-color: #000000;
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 20%;
  margin-top: 15px;
`;

export const InputNewTask = styled.input`
  background-color: transparent;
  border: 1px solid #000000;
  margin: 2%;
  border-radius: 8px;
  width: 80%;
  padding: 8px;
  :: placeholder {
    color: #696969;
    font-family: 'Roboto', sans-serif;
  }
`;
