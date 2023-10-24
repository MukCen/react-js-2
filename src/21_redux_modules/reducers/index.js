// import { combineReducers } from 'redux';

import { combineReducers } from "redux";
import tasks from './task'  
import  filters  from "./filter";
// const rootReducer = combineReducers({});

// export default rootReducer;
const rootReducer= combineReducers ({tasks, filters});

export default rootReducer;