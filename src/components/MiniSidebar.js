import { useSelector } from "react-redux"


const MiniSidebar =()=>{
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const isMiniSidebarOpen = useSelector(store=>store.app.isMiniSidebarOpen)
    if(!isMenuOpen && isMiniSidebarOpen){
        return  (
            <div className="w-20 h-64   flex flex-col justify-between items-center sticky mr-5 bg-white ">
                <div className="text-center  h-1/5 px-3 cursor-pointer rounded-md hover:bg-slate-200 ">
                <i className="fa-solid fa-house text-xl"></i>
                <p className="text-xs ">Home</p>  
                </div>
                <div className="text-center h-1/5 px-3  cursor-pointer rounded-md hover:bg-slate-200 ">
                <i className="fa-solid fa-play text-xl"></i>
                <p className="text-xs">Shorts</p>
                </div>
                <div className="text-center h-1/5 px-3  cursor-pointer rounded-md hover:bg-slate-200">
                    <i className="fa-solid fa-tv text-xl"></i>
                    <p className="text-xs">Subscriptions</p>
                </div>
                <div className="text-center h-1/5 px-3 cursor-pointer rounded-md hover:bg-slate-200">
                <i className="fa-regular fa-circle-user text-xl"></i>
                <p className="text-xs">You</p>
                </div>
            </div>
        )    }
    else{
     return null
    }
   
}
export default MiniSidebar