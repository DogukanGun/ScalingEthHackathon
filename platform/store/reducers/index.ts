import ConfigReducer from './config.reducer';
import { combineReducers } from 'redux';

const Reducer = combineReducers({
  config: ConfigReducer,
});

export default Reducer;
