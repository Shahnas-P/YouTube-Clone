import { useEffect } from "react";

const ChatMessage = ({data})=>{
    const {name,message} = data
    
    // console.log(name);
    // console.log(message);
    
   
    
    return(
        <>
       <div className="flex py-2">
       <img className="h-7 w-7 rounded-full bg-[#e5e7eb] p-1" src="./profile-image.png "/>&nbsp; &nbsp;
       <p>{name}</p>&nbsp; &nbsp;
        <p>{message}❤️</p>
       </div>
        </>
    )
}
export default ChatMessage;