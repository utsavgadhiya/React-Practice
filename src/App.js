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
import PureCompDemo from "./components/PureCompDemo";
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

function App() {
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
    </div>
  );
}

export default App;
