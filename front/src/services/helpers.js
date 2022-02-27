export const handleUpdate = (item, dispatch) => {
  const updatedRobot = {
    ...item,
    isComplete: !item.isComplete,
  };
  dispatch(action.updateRobot(updatedRobot));
};
