import './App.css';
import { Route } from 'react-router';
import Employees from './page/employee';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Employees}></Route>
    </div>
  );
}

export default App;
