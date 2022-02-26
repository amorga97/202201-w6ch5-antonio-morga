import { useDispatch } from 'react-redux';
import * as action from '../redux/robots/action-creators';

export function ListItem({ item }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(action.deleteRobot(item));
  };
  const handleUpdate = () => {
    const updatedTask = {
      ...item,
      isComplete: !item.isComplete,
    };
    dispatch(action.updateRobot(updatedTask));
  };
  return (
    <li className="list__item">
      <input
        type="checkbox"
        checked={item.isComplete}
        name=""
        id=""
        onChange={handleUpdate}
      />

      <p className="list__item-title">{item.robotName}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
