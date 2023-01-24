import NavBar from "./Nav";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home from "./Home";
import Blog from "./blog";

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
         </Switch>


       </div>

     
    </div>
    </Router>
  );
}

export default App;
