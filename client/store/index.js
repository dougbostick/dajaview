
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import media from './media';
import relationships from './relationships';
import users from './users';
import ratings from './ratings';
import posts from './posts';
import genres from './genres';
import dbMedia from './dbMedia';
import lists from './lists'
import recommendations from './recommendations';
import chats from './chats'


const reducer = combineReducers({
  auth,
  media,
  relationships,
  users,
  posts,
  genres,
  ratings,
  dbMedia,
  lists,
  recommendations,
  chats
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
export * from './media';
export * from './relationships';
export * from './users';
export * from './posts';
export * from './genres';
export * from './ratings';
export * from './dbMedia';
export * from './lists';
export * from './recommendations';
export * from './chats'