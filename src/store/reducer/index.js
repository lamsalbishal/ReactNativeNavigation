import {combineReducers} from 'redux';
import { newsReducers } from './homereducer';

const reducers = combineReducers({
  news: newsReducers,
});

export default reducers;