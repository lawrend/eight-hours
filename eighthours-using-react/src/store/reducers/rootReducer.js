// COMBINES REDUCERS: imports combineReducers and all reducers to be combined
import { combineReducers } from 'redux';
import DatesReducer from './DatesReducer';
import TimesReducer from './TimesReducer';

export const rootReducer = combineReducers({
  dates: DatesReducer,
  times: TimesReducer,
}
);


