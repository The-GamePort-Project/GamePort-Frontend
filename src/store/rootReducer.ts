import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Uses localStorage
import { persistReducer } from 'redux-persist';
import themeReducer from './slices/themeSlice';
import userReducer from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'theme'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
