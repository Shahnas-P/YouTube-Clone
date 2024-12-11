import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeBottomNav, closeMenu, closeMiniSidebar } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams('v')
    const params = searchParams.get('v')
//    console.log(params);
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
        dispatch(closeMiniSidebar())
        // VideoById()
        dispatch(closeBottomNav())

    }, [dispatch])

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const isMiniSidebarOpen = useSelector(store => store.app.isMiniSidebarOpen)
const isCloseBottomNav = useSelector(store=>store.app.isBottomNavOpen)


    // const VideoById =async ()=>{
    //     const response = await fetch()
    //     const json = response.json()
    // }



    if (!isMenuOpen && !isMiniSidebarOpen && !isCloseBottomNav) {
        return (
            <div className="flex  " >
                <div className="w-2/4 ml-28  mt-5 sm:ml-0 sm:mt-0">
                <iframe className="rounded-lg  sm:h-56 sm:w-screen sm:rounded-none  "   width="860"  height="490" src={`https://www.youtube.com/embed/${params}?autoplay=1&mute=0&si=R2SJF5I43rBVKOd_`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <CommentsContainer/>
                </div>
                <div className="sm:hidden flex align-middle w-2/4 ml-10 justify-center" >
                <LiveChat/>
                

                </div>
            </div> 
        )
    }
    if(isMenuOpen && !isCloseBottomNav){
        return (
            <div className=" w-screen h-screen fixed -z-50 flex">
                <div className=" w-3/5  ml-28  mt-5 ">
                <iframe className="rounded-lg"   width="860"  height="490" src={`https://www.youtube.com/embed/${params}?autoplay=1&mute=0&si=R2SJF5I43rBVKOd_`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <CommentsContainer/>
                </div>
                <div className="sm:hidden">
                <LiveChat/>

                </div>
            </div>
        )
    }
    else {
        return null
    }

}
export default WatchPage;