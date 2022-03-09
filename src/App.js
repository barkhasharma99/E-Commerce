 
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch,Route} from 'react-router-dom';
import Product from './component/Product';
import Prod from './component/Prod';
function App() {
  return (
    <>
     <Navbar />

     <Switch>
       <Route exact path={"/"} component={Home} />
       <Route exact path={"/product"} component={Product} />
       <Route exact path={"/prod"} component={Prod} />
     

     </Switch>
    
    </>
  );
}

export default App;
