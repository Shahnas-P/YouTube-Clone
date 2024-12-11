import { createSlice } from "@reduxjs/toolkit";
const LIVE_CHAT_COUNT =process.env.REACT_APP_LIVE_CHAT_COUNT

const chatSlice = createSlice({
    name:'chat' , 
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(25,2)
            state.messages.unshift(action.payload)
        }
    }

})
export const {addMessage} = chatSlice.actions
export default chatSlice.reducer;