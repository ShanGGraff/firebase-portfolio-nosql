import formVisibleReducer from './form-visible-reducer';
import portfolioListReducer from './portfolio-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPortfolioList: portfolioListReducer
});

export default rootReducer;