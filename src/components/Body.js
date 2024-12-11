import Sidebar from "./Sidebar";
import MiniSidebar from "./MiniSidebar";
import { Outlet } from "react-router-dom";

const Body = ()=>{
    return (
        <div className="grid grid-flow-col overflow-y-hidden  ">
        <MiniSidebar/>
        <Sidebar/>       
        <Outlet/>
        </div>
    )
}
export default Body;