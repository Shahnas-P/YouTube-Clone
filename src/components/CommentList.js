import Comment from "./Comment"
const CommentList = ({comments})=>{
    
    
return(
    <div>
        {comments.map((comment,index)=>(
            <div key={index}>
                 <Comment  data={comment} />
                 <div className="pl-5 border-l border-black ml-5 sm:ml-0 sm:pl-0 ">
                    


                <CommentList key={comment.id}  comments={comment.reply}/>


                  </div>  

                </div>

        ))}

       

      

    </div>
) 

}
export default CommentList