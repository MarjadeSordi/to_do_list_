import styled from 'styled-components';

export const WelcometoApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleWelcome = styled.h1`
  font-family: 'Bebas Neue', cursive;
  text-align: center;
`;
