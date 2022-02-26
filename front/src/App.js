import { useDispatch } from 'react-redux';
import './App.css';
import { Form } from './components/form';
import { List } from './components/list';
import * as api from './services/api';
import * as action from './redux/robots/action-creators';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getRobots().then((resp) => {
      dispatch(action.loadRobots(resp.data));
    });
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
