import {combineReducers} from 'redux';
import {changeToggleSlider} from './adminReducer';

//session
import {sessionReducer} from 'redux-react-session';

const rootReducer = combineReducers({
  session: sessionReducer,
  changeToggleSlider
});

export default rootReducer;