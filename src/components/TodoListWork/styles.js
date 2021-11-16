import styled from 'styled-components';

export const Box = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 2px solid #c3c3c3c3;
  border-radius: 30px;
  margin: 20px;
  @media (max-width: 600px) {
    width: 90%;
    margin-right: 5%;
  }
`;

export const BoxAddTask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWork = styled.h1`
  font-family: 'Bebas Neue', cursive;
  text-align: center;
  margin: 10px;
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
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const TextButton = styled.span`
  margin-left: 4%;
`;

export const ListforTask = styled.li`
  list-style: none;
  font-family: 'Roboto', sans-serif;
`;

export const ButtonsList = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextList = styled.h2`
  font-family: 'Roboto', sans-serif;
  margin: 5px 10px 10px 30px;
`;

export const DescriptionBox = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 10px 30px;
`;

export const Boxbuttons = styled.div`
  margin-right: 5%;
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ButtonList = styled.button`
  background-color: #696969;
  color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  width: 20%;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 4%;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const ModalOverlay = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0) transparent;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditBox = styled.div`
  position: absolute;
  z-index: 2;
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
