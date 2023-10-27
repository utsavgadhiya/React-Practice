import React, { useReducer } from "react";
// import logo from './logo.svg';
import "./App.css";

// Components
import Foo from "./components/Foo";
import Bar from "./components/Bar";
import JSX from "./components/JSX";
import NotJSX from "./components/NotJSX";
import PropsComp from "./components/PropsComp";
import StateComp from "./components/StateComp";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import InlineCSS from "./components/InlineCSS";
import Form from "./components/Form";
import "./appStyles.css";
import styles from "./appStyles.module.css"; // modules or inline is a preffered way for css styling in react
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import PortalsDemo from "./components/PortalsDemo";
import ErrorBoundaryComp from "./components/ErrorBoundaryComp";
import HeroComp from "./components/HeroComp";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounter";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/userContext";
import GetList from "./components/GetList";
import PostForm from "./components/PostForm";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterFive from "./components/HookCounterFive";
import HookMouseOver from "./components/HookMouseOver";
import MouseContainer from "./components/MouseContainer";
import HookIntervalCounter from "./components/HookIntervalCounter";
import FetchData from "./components/FetchData";
import CompA from "./components/CompA";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree"
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Fetch1 from "./components/Fetch1";
import Fetch2 from "./components/Fetch2";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'inc':
      return state + 1
    case 'dec':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Foo />
      <Bar name="Class component"></Bar>
      <JSX />
      <NotJSX />
      <PropsComp name="Utsav" age="24">
        <p>This is a child props</p>
      </PropsComp>
      <PropsComp name="Kirtan" age="21">
        <button>Child Props</button>
      </PropsComp>
      <StateComp></StateComp>
      <EventBind></EventBind>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <InlineCSS></InlineCSS>
      <Form></Form>
      <LifeCycleA></LifeCycleA>
      <FragmentDemo></FragmentDemo>
      <Table></Table>
      <ParentComp></ParentComp>
      <RefsDemo></RefsDemo>
      <PortalsDemo></PortalsDemo>

      {/* Below is Error Boundary Concept */}
      <ErrorBoundaryComp>
        <HeroComp heroName="Batman"></HeroComp>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
        <HeroComp heroName="Joker"></HeroComp>
      </ErrorBoundaryComp>

      {/* Below is Higher Order Component Concept */}
      <ClickCounter name="Utsav"></ClickCounter>
      <HoverCounter></HoverCounter>

      {/* Below is Render Props Concept  */}
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      </Counter>

      {/* This is context example */}
      <UserProvider value="Utsav">
        <ComponentA></ComponentA>
      </UserProvider>

      <GetList></GetList>
      <PostForm></PostForm>
      <HookCounter></HookCounter>
      <HookCounterTwo></HookCounterTwo>
      <HookCounterThree></HookCounterThree>
      <HookCounterFour></HookCounterFour>
      <HookCounterFive></HookCounterFive>
      <HookMouseOver></HookMouseOver>
      <MouseContainer></MouseContainer>
      <HookIntervalCounter></HookIntervalCounter>

      {/* use axios to get fetch data using useEffect hook */}
      <FetchData></FetchData>

      {/* Context using Functional Component */}
      <UserContext.Provider value={'Utsav'}>
        <ChannelContext.Provider value={'Channel'}>
          <CompA></CompA>
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* using useReducer hook */}
      <CounterOne></CounterOne>

      {/* using useReducer hook but with object properties */}
      <CounterTwo></CounterTwo>

      {/* Multiple useReducers */}
      <CounterThree></CounterThree>

      {/* useReducer with useContext */}
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count : {count}
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Comp3></Comp3>
      </CountContext.Provider>

      {/* Fetching daa with useState and useEffect hooks */}
      <Fetch1></Fetch1>

      {/* Feching data with useReducer and useEffect hooks */}
      <Fetch2></Fetch2>

    </div>
  );
}

export default App;
