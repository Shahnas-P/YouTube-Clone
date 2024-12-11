import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({item})=>{

    const [timeAgo,setTimeAgo]=useState()

  



  // console.log(item);

    const {snippet,statistics} = item
    // console.log(snippet);
    // console.log(statistics);
    const {categoryId,channelId,channelTitle,description,title,publishedAt}=snippet
const {commentCount,favoriteCount,likeCount,viewCount}=statistics
// console.log(publishedAt);
const {url,height,width} = snippet.thumbnails.medium

useEffect(()=>{
    calculateTimeAgo()
   },[publishedAt])
  
  const calculateTimeAgo =()=>{
    let result;
    const currentDate = new Date()
    const givenDate = new Date(publishedAt)

      // Ensure the timestamp is valid
  if (isNaN(givenDate)) {
    return "Invalid date";
  }

    const diffInMs = currentDate - givenDate

     // Avoid showing large or negative values (e.g., future dates)
  if (diffInMs < 0) {
    return "Comming Soon...";  // Optional handling for future dates
  }

    // Convert the difference into different units
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

      // Helper function to correctly pluralize time units
  const pluralize = (value, unit) => `${value} ${unit}${value === 1 ? "" : "s"} ago`;

    // Handle different time ranges
  if (diffInYears >= 1) {
    result =  pluralize(diffInYears, "year");
  } else if (diffInMonths >= 1) {
    result=  pluralize(diffInMonths, "month");
  } else if (diffInDays >= 1) {
    result= pluralize(diffInDays, "day");
  } else if (diffInHours >= 1) {
    result=  pluralize(diffInHours, "hour");
  } else if (diffInMinutes >= 1) {
    result= pluralize(diffInMinutes, "minute");
  } else {
    result= "Just now";
  }

    setTimeAgo(result)

  }
    
    
    
    
    return (
        <div className="mt-10  w-1/3 pr-3 sm:w-screen ">
           <Link  to={"/watch?v="+item.id}>
            <div >
            <div >
                <img  className=" w-full rounded-3xl" src={url}/>
                
            </div>
            <div className=" flex justify-between ">
                <div className="flex">
                <img className="w-10 h-10 rounded-full p-1" src="https://yt3.googleusercontent.com/MF_R_v4iUQzpPkrXmv83TXsM1Zu7JZgLX6aE1c7Jcitpg_6KyBVklYShMiDVRnK8-rJ2WnFg=s900-c-k-c0x00ffffff-no-rj"/>
                <h6 className=" p-1 font-medium  ">{title}</h6>
                </div>
               
                <i className="fa-solid fa-ellipsis-vertical pt-2 pr-2 "></i>
            </div>
            <div className="pl-11">
                <p className="text-gray-700">{channelTitle}</p>
                <p className="text-gray-700">{viewCount} views <span>.</span>{timeAgo}</p>
            </div>
            </div>
            </Link>


        </div>
    )
}
// Higher Order Component Example
// export const AdVideoCard = ({item})=>{
// return(
//   <div className="border border-red-500">
//   <VideoCard item={item} />
//   </div>
// )
// }

export default VideoCard;