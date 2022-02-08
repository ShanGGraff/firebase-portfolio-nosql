import formVisibleReducer from './form-visible-reducer';
import portfolioListReducer from './portfolio-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPortfolioList: portfolioListReducer,
  firestore: firestoreReducer
});

export default rootReducer;