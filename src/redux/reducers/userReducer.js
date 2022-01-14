import { LOGIN } from '../action';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
