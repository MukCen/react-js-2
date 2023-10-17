// import { combineReducers } from 'redux';

import { combineReducers } from "redux";
import tasks from './task'  
// const rootReducer = combineReducers({});

// export default rootReducer;
const rootReducer= combineReducers ({tasks});

export default rootReducer;