
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Navbar from './Components/NavBar'



function App() {
  return (
      <div>
      <Router>
        {/*<Header/>*/}
        <Navbar/>
            <Switch>
              <Route exact path="/">
              <Home />
              </Route>
              <Route path="/about">
              <About />
              </Route>
              <Route path="/contact">
              <Contact />
              </Route>
            </Switch>

      </Router>
      </div>
  );
}

export default App;
