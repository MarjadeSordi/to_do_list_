import React from 'react';
import TodoListPersonal from '../../components/TodoListPersonal';
import TodoListWork from '../../components/TodoListWork';
import { TitleWelcome, WelcometoApp } from './styles';

const data = new Date();
const day = data.getDate(); // 1-31
const month = data.getMonth(); // 0-11 (zero=janeiro)
const year = data.getFullYear();

const todayIs = day + '/' + (month + 1) + '/' + year;

const Welcome = () => {
  return (
    <>
      <TitleWelcome id='titleWelcome'> Bem vindo, hoje é {todayIs} </TitleWelcome>
      <WelcometoApp id='welcomeApp'>
        <TodoListWork id='toDoListWWork'/>
        <TodoListPersonal id='toDoListPersonal'/>
      </WelcometoApp>{' '}
    </>
  );
};

export default Welcome;
