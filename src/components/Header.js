import { useDispatch,useSelector } from "react-redux";
import {  toggleMenu } from "../Utils/appSlice";
import { useState ,useEffect} from "react";
import { addToCache } from "../Utils/searchSlice";
import BottomNavBar from "./BottomNavBar";


const Header = () => {
    const [searchQuery,setSearchQuery]=useState('')
    const [suggestion,setSuggestion]=useState([])
    const [showSuggestion,setShowSuggestion]=useState(false)
    const dispatch = useDispatch()
    const searchCache = useSelector(store =>store.search)
  
   const openBottomNav = useSelector(store=>store.app.isBottomNavOpen)

    useEffect(()=>{
        
       const timer =  setTimeout(()=>{

        //cache suggestion to store 
        if(searchCache[searchQuery]){
            setSuggestion(searchCache[searchQuery] )
        }else{
            getSearchSuggestions()
        }

        },200)

        return ()=>{
            clearTimeout(timer)
        }


    }
    
    ,[searchQuery])

  


    const getSearchSuggestions = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_YOUTUBE_SEARCH_SUGGESTION_API}${searchQuery}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const suggestions = await response.json();
            setSuggestion(suggestions[1])

            // Dispatch an action to cache suggestion into redux store
            dispatch(addToCache({[searchQuery]:suggestions[1]}))

            // console.log(suggestion);
            
        } catch (error) {
            console.error("Error fetching search suggestions:", error);
        }
    };
    


    
    const handleToggle = ()=>{
         dispatch(toggleMenu())
    }
    // console.log(searchQuery);

    return (
        <>
 <div className="flex  justify-between sticky top-0   z-50 bg-white  " >
            <div className="  flex items-center sm:w-[100%] sm:justify-between sm:px-4 " >
                <button className=" sm:hidden m-5 text-3xl hover:bg-slate-200  px-3 py-1 rounded-full" onClick={()=>handleToggle()}>
                <span className="material-symbols-outlined ">menu</span>
                </button>
                
                <img  className=" w-24 h-16" src="./youtube-logo.png"/>
                <i className="fa-solid fa-magnifying-glass lg:hidden"></i>
             
            </div>
        {/* <div> */}
            <div className=" sm:hidden w-2/4 mt-5 " >

            <input
            value={searchQuery}
            onChange={(e)=>{
                setSearchQuery(e.target.value)
            }}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            className="  w-2/3 h-10 ml-6 outline-none border  pl-5 rounded-l-full border-gray-300 placeholder:size-auto placeholder:text-gray-400 placeholder:font-normal"  placeholder="Search"/>
            <button className="border w-auto h-10 px-6 mt-1 border-l-inherit rounded-r-full border-gray-300 bg-slate-50 hover:bg-slate-100"><i className="fa-solid fa-magnifying-glass "></i></button>

            <button className="h-10 w-10 ml-6  mx-6 rounded-full border-gray-300 bg-slate-50 hover:bg-slate-200"><i className="fa-solid fa-microphone "></i></button>        
           {
            showSuggestion &&  <div className=" border absolute  ml-8 w-[31rem] bg-white rounded-md  shadow-2xl pt-2 m-0">
            <ul>
                {suggestion.map(((item,index)=><li key={index} className=" pl-4 p-1  hover:bg-[#dbdbdb] "><i className="fa-solid fa-clock-rotate-left"></i><span className="pl-3">{item}</span></li>))}

            </ul>
        </div>
           }
           
            </div>
         
            {/* </div> */}
            <div className=" sm:hidden flex  w-1/12 mt-5 justify-between items-center mr-7">
            <i className="fa-solid fa-video text-xl hover:bg-slate-200   p-2 rounded-full"></i>
            <i className="fa-regular fa-bell text-xl hover:bg-slate-200  p-2 rounded-full"></i>
            <img className="h-7 w-7 rounded-full" src="./profile-image.png"/>
            </div>
        </div>
          {openBottomNav && <BottomNavBar/>}

        
        </>
       
    )
}
export default Header;