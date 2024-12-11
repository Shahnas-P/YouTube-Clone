const Comment = ({data})=>{
    const {name ,text, reply} = data
    return (
        <div className="flex flex-row sm:w-screen sm:px-2 ">
           <div className="m-3 sm:m-0">  
           <img className="h-7 w-7 rounded-full " src="./profile-image.png"/>
           </div>
           <div>
            <p>@{name}</p>
            <p>{text}</p>
           <div className="m-5">
           <i className="fa-regular fa-thumbs-up text-2xl p-2 hover:bg-slate-300 rounded-full"></i>
           <i className="fa-regular fa-thumbs-down text-2xl  p-2 hover:bg-slate-300 rounded-full"></i>
           <button className= " p-1  font-semibold text-lg hover:bg-slate-300 rounded-full">Reply</button>
           </div>
           </div>
        </div>
    )
}
export default Comment;