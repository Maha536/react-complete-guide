import React, { Component } from 'react';
import './App.css';
import './appStyles.css';
import ComponentC from './context-examples/ComponentC';
import { userProvider } from './context-examples/UserContext';

/*
import ClickCounter2 from './components/ClickCounter2';
import Counter2 from './components/Counter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import ClickCounter from './components/ClickCounter';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
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

import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentsDemo from './components/FragmentsDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
*/


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1>Hello</h1>
        <userProvider value='Hari'>
          <ComponentC/>
         </userProvider>
        
         {/*
         <Counter2>
        {(count,incrementCount)=> <ClickCounter2 count={count} incrementCount={incrementCount}/>}
        </Counter2>
        <Counter2>
          {(count,incrementCount)=> <HoverCounter2 count={count} incrementCount={incrementCount}/>}
        </Counter2>
         <ClickCounter2/>
        <HoverCounter2/>        
        <User name={(isLoggedIn)=>isLoggedIn?'Hari':'Guest'}/>
         <ErrorBoundary>
          <Hero heroName='superman'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='joker'/>
        </ErrorBoundary>
         <FRParentInput/>
         <FocusInput/>
         <RefsDemo/>
         <ParentComp/>
         <PureComp/>
         <Table/>
         <FragmentsDemo/>
         <LifecycleA/>
         <Form></Form>
         <Inline></Inline>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
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
