import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import invite from './invite';

export default combineReducers({ invite, form: formReducer });
