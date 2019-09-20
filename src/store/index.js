import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import actionTypes from './actionTypes'

const darkMode = (state = false, action) => {
	switch (action.type) {
		case actionTypes.DARKMODE_TOGGLE:
			return !state
		default:
			return state
	}
}

const lang = (state = 'nodejs', action) => {
	switch (action.type) {
		case actionTypes.LANG_SET:
			return action.lang
		default:
			return state
	}
}

const persistConfig = {
	key: 'root',
	storage,
}

const reducers = combineReducers({
	darkMode,
	lang,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
