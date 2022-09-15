import './App.css';
import { Home, About } from './pages'
import { Navbar } from './components'
import { Footer } from './containers';

const App = () => {
  return ( 
      <div className="app">
         <div className="nav">
            <Navbar/>
         </div>
         <div className="page">
            <Home/>
         </div>
         <div className="footer">
            <Footer/>
         </div>
      </div>
   );
}

export default App;