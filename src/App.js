import { BrowserRouter as Router, Route} from "react-router-dom";
import Close from "./close.jsx";
import Inicis from './inicis.jsx';


function App() {


  return (
    <Router>
      <Route exact path="/" component={() => <Inicis/>}/>
      <Route exact path="/Close" component={() => <Close />}/>
    </Router>
  );
}

export default App;
