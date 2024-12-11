import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const BottomNavBar = () => {


    return (
        <div className="sm:flex hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-300 z-50">
            <div className="flex justify-around w-full py-2">
            <div className="text-center  h-1/5 px-3 cursor-pointer rounded-md ">
                <i className="fa-solid fa-house text-xl"></i>
                <p className="text-xs ">Home</p>  
                </div>        
                
                <div className="text-center h-1/5 px-3  cursor-pointer rounded-md ">
                <i className="fa-solid fa-play text-xl"></i>
                <p className="text-xs">Shorts</p>
                </div>
                <div className="text-center h-1/5 px-3  cursor-pointer rounded-md ">
                    <i className="fa-solid fa-tv text-xl"></i>
                    <p className="text-xs">Subscriptions</p>
                </div>
                <div className="text-center h-1/5 px-3 cursor-pointer rounded-md ">
                <i className="fa-regular fa-circle-user text-xl"></i>
                <p className="text-xs">You</p>
                </div>
            </div>
        </div>
    );
};

export default BottomNavBar;
