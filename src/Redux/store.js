import { configureStore } from '@reduxjs/toolkit';
import festReducer from './fest/festSlice';
import eventReducer from './event/eventSlice';
import authReducer from './auth/authSlice';
import userReducer from './auth/userSlice';

const store = configureStore({
    reducer: {
        fest: festReducer, // Handles the 'fest' slice of state
        event: eventReducer, // Handles both 'eventCategories' and 'events'
        auth: authReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disables serializable checks if necessary
        }),
});

export default store;
