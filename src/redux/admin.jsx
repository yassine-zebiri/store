import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Products:[],
    Categorie:[],
    FETCH_DATA:{
        products:false,
        categorie:false
    },
}

const AdminSiler=createSlice({
    name:'ADMIN_DATA',
    initialState,
    reducers:{
        FETCH_DATA:(state,action)=>{
            switch (action.payload.name) {
                case "products" :
                    state.FETCH_DATA.products=!state.FETCH_DATA.products;
                    break;
                case "categorie" :
                    state.FETCH_DATA.categorie=!state.FETCH_DATA.categorie;
                    break;
                default:
                    break;
            }
            
        },
        getProducts:(state,action)=>{
            state.Products=action.payload
        },
        setCaseProduct:(state,action)=>{
            state.Products[action.payload.id].case=action.payload.case
        },
        removeProduct:(state,action)=>{
            state.Products.splice(action.payload,1);
            state.Products=[...state.Products];
        },
        getCategroie_Redux:(state,action)=>{
            state.Categorie=action.payload;
        },
        setCaseCategorie_Redux:(state,action)=>{
            state.Categorie[action.payload.id].case=action.payload.case;
        },
        Add_Categorie_Redux:(state,action)=>{
            state.Categorie.push(action.payload);
            state.Categorie=[...state.Categorie];
        },
        removeCategorie_Redux:(state,action)=>{
            state.Categorie.splice(action.payload,1);
            state.Categorie=[...state.Categorie];
        },
        
    }
})
export const {FETCH_DATA,getProducts,setCaseProduct,removeProduct,getCategroie_Redux,
setCaseCategorie_Redux,Add_Product_Redux,Add_Categorie_Redux,removeCategorie_Redux
}=AdminSiler.actions;
export default AdminSiler.reducer;