import { configureStore } from '@reduxjs/toolkit';
import headerToolsReducer from './headerTools';
import ADMIN_DATAReducer from './admin';
const redux=configureStore({
    reducer:{
        headerTools:headerToolsReducer,
        ADMIN_DATA:ADMIN_DATAReducer
    }
})
export default redux;