import { createStore } from 'redux'
import toggleFavorite from './reducers/favoritesReducer'

export default createStore(toggleFavorite)
