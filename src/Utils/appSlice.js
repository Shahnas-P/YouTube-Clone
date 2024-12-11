import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isMiniSidebarOpen:true,
        isBottomNavOpen :true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false 
        },
        closeBottomNav:(state)=>{
            state.isBottomNavOpen = false
        },
        
        openMiniSidebarAlways:(state)=>{
                state.isMiniSidebarOpen=true
            }
        ,
        closeMiniSidebar:(state)=>{
            state.isMiniSidebarOpen = false
        }
    }
})
export const {toggleMenu,closeMenu,openMiniSidebarAlways,closeMiniSidebar,closeBottomNav}= appSlice.actions
export default appSlice.reducer