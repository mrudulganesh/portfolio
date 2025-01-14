
import { Fragment } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";
import Project from "./Components/Projects/Project";
import Service from "./Components/Services/Service";

function App() {
  return (
    <Fragment>
      <Header />
      <Post />
      <Service />
      <About />
      <Project />
      <Contact />
    </Fragment>
  );
}

export default App;
