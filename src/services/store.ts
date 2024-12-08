import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import counterReducer from './slices/counterSlice'; // Example slice
import AsyncStorage from '@react-native-async-storage/async-storage';

// Root reducer combining all slices
const rootReducer = combineReducers({
    counter: counterReducer,
});

// Persist configuration
const persistConfig = {
    key: 'citymart',
    storage: AsyncStorage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Persistor for the store
export const persistor = persistStore(store);

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
