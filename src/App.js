import './App.css';
import Register from './Register';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Register}></Route>
        <Route exact path="/sign-in" component={LoginForm}></Route>
      </Switch>
    </div>
  );
}

export default App;
