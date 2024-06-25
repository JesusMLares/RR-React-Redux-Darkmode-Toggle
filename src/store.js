//Store setup
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/modeSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})