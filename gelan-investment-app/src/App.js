import './App.css';
import { Home, About, Opportunities } from './pages'
import { Navbar } from './components'
import { Footer } from './containers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (

   <Router>
         <div className="app">
            <Navbar/>
            <div className="page">
               <Switch>
                  <Route exact path="/home">
                     <Home />
                  </Route>
                  <Route exact path="/opportunities">
                     <Opportunities/>
                  </Route>
                  <Route eaxct path="/about">
                     <About/>
                  </Route>
               </Switch>
            </div>

            <Footer/>
         </div>
   </Router>
   );
}

export default App;