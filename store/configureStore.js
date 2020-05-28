import { createStore, combineReducers } from 'redux';
import toggleFavorite from './reducers/favoritesReducer'
import setAvatar from './reducers/avatarReducer'

export default createStore(combineReducers({toggleFavorite, setAvatar}))
