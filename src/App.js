import NavBar from "./Nav";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home from "./Home";
import Blog from "./blog";
import Create from "./create";
import BlogDetail from "./BlogDetail";

function App() {
  return (
    <Router>
    <div className="App">
      
      <NavBar/>
      <div className="component">
         <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogDetail/:id">
            <BlogDetail/>
          </Route>
         </Switch>


       </div>

     
    </div>
    </Router>
  );
}

export default App;
