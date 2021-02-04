import React, { Component } from 'react';
import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import StyleSheet from './components/StyleSheet';
import Inline from './Inline';
import './appStyles.css';
import styles from './appStyles.module.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Inline></Inline>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
         {/*
         <StyleSheet primary={true}></StyleSheet>
         <NameList></NameList>
         <UserGreeting></UserGreeting>
         <ParentComponent></ParentComponent>
         <EventBind/>
        <FunctionClick/>
        <ClassClick/>
       
        <Counter></Counter>
        <Greet name="Bruce" heroName="Spiderman"></Greet>
        
        <Message></Message>
        <h1>Hello, This is my first React project</h1>
        <Greet name="Bruce" heroName="Spiderman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Daina" heroName="Superrman">
          <button>Action</button>
        </Greet>
        <Greet name="John" heroName="Batman"/>
        <Welcome name="Bruce" heroName="Spiderman"/>
        <Welcome name="Daina" heroName="Superrman"/>
        <Welcome name="John" heroName="Batman"/>
        {/*<Hello_UsingJSX/>
        <Hello_withoutjsx/> */}
      </div>
    );
  }
}

export default App;
