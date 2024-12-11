import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../Utils/chatSlice";
import { useEffect, useState } from "react";
import { generateRandomNames, makeRandomMessages } from "../Utils/helper";
const LiveChat = ()=>{
const dispatch = useDispatch()
const liveMessages = useSelector((store)=>store.chat.messages)
const [liveChatText,setLiveChatText] = useState("")

    useEffect(()=>{

        const i =  setInterval(()=>{
             //API Polling
dispatch(addMessage({
    name:generateRandomNames(),
    message: makeRandomMessages(25)
}))
             
         },2000)
          
         return ()=> clearInterval(i)
     },[])

  
    return (
        <>
       <div className="border  w-[25rem] h-[35rem] mt-5 rounded-2xl flex flex-col justify-between ">
        <div className=" flex flex-row justify-between text-lg border-b p-3 ">
            <div>Top chat <span><i className="fa-solid fa-angle-down"></i></span></div>
            <div className=" w-14 flex justify-between">
            <i className="fa-solid fa-ellipsis-vertical text-2xl font-thin"></i>
            <i className="fa-solid fa-xmark text-3xl "></i>
            </div>

        </div>
        <div className=" h-[28rem] overflow-y-scroll flex flex-col-reverse">
            {liveMessages.map(( chat,index)=><ChatMessage key={index} data ={chat} />
)}
            

        </div>
        <form  onSubmit={(e)=>{
            e.preventDefault()
            console.log("Trying out submit..");
            
        }} className=" flex flex-row justify-between text-lg border-t p-3  ">
            <div className=" flex flex-row  ">
                <div className="flex  h-10 w-[20rem]  pt-2 pl-1 px-3 justify-between rounded-full bg-[#e5e7eb]">
                    <input onChange={(e)=>{
                        setLiveChatText(e.target.value)
                    }} value={liveChatText}  placeholder="Chats..." className="h-6 w-[17rem] border-none outline-none ml-2 bg-[#e5e7eb] " />
                    {/* <i className="fa-regular fa-face-smile font-thin text-2xl  "></i> */}
                  <button onClick={()=>{
                    dispatch(addMessage({
                        name:"ShahnasAfsin",
                        message:liveChatText
                    }
                    
                ))
                setLiveChatText("")

                  }} ><i className="fa-regular fa-paper-plane font-thin text-2xl hover:text-xl"></i></button>  
                </div>
            </div>
            <div className=" rounded-full bg-[#e5e7eb] "><i className="fa-regular fa-heart text-2xl  p-2"></i></div>
        </form>
       </div>
        </>
    )
}
export default LiveChat;