import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    const isMenuOpen = useSelector(store =>store.app.isMenuOpen)
if(!isMenuOpen){
    return null
}else{
    return (
        <div className="w-64  sm:hidden bg-white h-[50rem]  sticky ">
            <div className=" h-[50rem] hover:overflow-y-scroll   ">

           
            
           <div>
           <Link to={"/"}> 
            <div className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full"> 
           
            <i className="fa-solid fa-house text-xl"></i>
            <p className="text-sm font-medium ">Home</p> 
            
            </div>
            </Link> 
            <div  className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full">
            <i className="fa-solid fa-play text-xl"></i>
            <p className="text-sm font-medium ">Shorts</p>
            </div>
            <div  className="flex justify-evenly w-9/12 py-4 hover:bg-slate-200 rounded-full">
            <i className="fa-solid fa-tv text-xl"></i>
            <p className="text-sm font-medium ">Subscriptions</p>
            </div>
            <div className="border w-8/12 ml-3 mt-3"></div>
           </div>

           <div>
           <div className="flex justify-center w-5/12 py-4 font-medium items-center hover:bg-slate-200 rounded-full"> 
            <p>You</p>&nbsp;&nbsp;
            <i className="fa-solid fa-greater-than text-sm "></i>
            </div>
            <div className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-regular fa-id-card text-xl"></i>
            <p className="text-sm font-medium ">Profile</p>  
            </div>
            <div  className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full">
            <i className="fa-solid fa-clock-rotate-left text-xl"></i>
            <p className="text-sm font-medium ">History</p>
            </div>
            <div  className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full ">
            <i className="fa-solid fa-grip-lines text-xl"></i>
            <p className="text-sm font-medium ">Playlists</p>
            </div>
            <div className="flex justify-evenly w-8/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-solid fa-circle-play text-xl"></i>
            <p className="text-sm font-medium ">Your videos</p>  
            </div>
            <div className="flex justify-evenly w-8/12 py-4 hover:bg-slate-200 rounded-full" > 
            <i className="fa-regular fa-clock text-xl"></i>
            <p className="text-sm font-medium ">Watch later</p>  
            </div>
            <div className="flex justify-evenly w-8/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-regular fa-thumbs-up text-xl"></i>
            <p className="text-sm font-medium ">Liked videos</p>  
            </div>
            <div className="border w-8/12 ml-3"></div>
           </div>

           <div>
           <div className="flex justify-center w-5/12 py-4 font-medium items-center hover:bg-slate-200 rounded-full"> 
            <p>Explore</p>&nbsp;&nbsp;
            </div>
            <div className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-solid fa-fire"></i>
            <p className="text-sm font-medium ">Trending</p>  
            </div>
            <div  className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full">
            <i className="fa-solid fa-bag-shopping"></i>
            <p className="text-sm font-medium ">Shopping</p>
            </div>
            <div  className="flex justify-evenly w-6/12 py-4 hover:bg-slate-200 rounded-full ">
            <i className="fa-solid fa-music"></i>
            <p className="text-sm font-medium ">Music</p>
            </div>
            <div className="flex justify-evenly w-6/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-solid fa-gamepad"></i>
            <p className="text-sm font-medium ">Gaming</p>  
            </div>
            <div className="flex justify-evenly w-6/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-regular fa-newspaper"></i>
            <p className="text-sm font-medium ">News</p>  
            </div>
            <div className="flex justify-evenly w-6/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-solid fa-trophy"></i>
            <p className="text-sm font-medium ">Sports</p>  
            </div>
            <div className="border w-8/12 ml-3"></div>
           </div>

           <div>
            <div className="flex justify-evenly w-7/12 py-4 hover:bg-slate-200 rounded-full"> 
            <i className="fa-solid fa-gear"></i>
            <p className="text-sm font-medium ">Settings</p>  
            </div>
            <div  className="flex justify-evenly w-9/12 py-4 hover:bg-slate-200 rounded-full">
            <i className="fa-regular fa-flag"></i>
            <p className="text-sm font-medium ">Report history</p>
            </div>
            <div  className="flex justify-evenly w-6/12 py-4 hover:bg-slate-200 rounded-full">
            <i className="fa-regular fa-circle-question"></i>
            <p className="text-sm font-medium ">Help</p>
            </div>
            <div  className="flex justify-evenly w-9/12 py-4 hover:bg-slate-200 rounded-full">
            <i className="fa-regular fa-message"></i>
            <p className="text-sm font-medium ">Send feedback</p>
            </div>
            <div className="border w-8/12 ml-3"></div>
           </div>
           </div>
        </div>
    )
}
   
}
export default Sidebar;