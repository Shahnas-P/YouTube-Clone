import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";

const VideoContainer = ()=>{
    const [video,setVideo]=useState()
    const REACT_APP_YOU_TUBE_API = process.env.REACT_APP_YOU_TUBE_API
    const REACT_APP_YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
    useEffect(()=>{
        getVideo()
    },[])
    
    const getVideo =async ()=>{
       try{
        const response = await fetch(REACT_APP_YOU_TUBE_API+REACT_APP_YOUTUBE_API_KEY)
        if(!response.ok){
            throw new Error (`HTTP error ! Status:${response.status}`)
        }
        const json =await response.json()

    //   console.log(json.items);
      setVideo(json.items)
     
      
      
        

       }catch(error){
        console.error("Error Fetching data"+ error)
        
       }
       
       
         
    }

    
    
    return (
        <div className=" flex flex-wrap sm:flex-col h-screen overflow-y-scroll  ">
          {/* Higher Order Component Example   */}
            {/* {video && <AdVideoCard item={video[0]}  />} */}
            {video?.map((item)=> <VideoCard key={item.id} item={item} />)}
           
        </div>
    )
}
export default VideoContainer;