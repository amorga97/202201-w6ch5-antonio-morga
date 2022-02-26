import { actionTypes } from './action-types';

const initialState = [];

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadRobots:
      return [...action.payload];
    case actionTypes.addRobot:
      return [...state, action.payload];
    case actionTypes.deleteRobot:
      return state.filter((item) => item.id !== action.payload.id);
    case actionTypes.updateRobot:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
