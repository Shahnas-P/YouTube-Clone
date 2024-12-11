import CommentList from "./CommentList";
import Comment from "./Comment";
const commentsData = [
    {
        id:112211222,
        name:"Shahnas",
        text:"I love your videos. But I admit that the most impressive thing to me is the way you worship God and establish Him as a priority in your life. You have truly inspired me to strengthen my relationship with God. Thank you Husna!❤️🌹",
        reply:[
            {
                id:9534983835094830,
                name:"Afsin Hassn",
                text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                reply:[{
                    id:134234,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:53242,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:98098,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:67678,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                }]
            }
        ]
    },
    {
        id:221122221111,
        name:"Shahnas",
        text:"I love your videos. But I admit that the most impressive thing to me is the way you worship God and establish Him as a priority in your life. You have truly inspired me to strengthen my relationship with God. Thank you Husna!❤️🌹",
        reply:[
            {
                id:4242034982094820333,
                name:"Afsin Hassn",
                text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                reply:[{
                    id:42342,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:289433,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:290994,
                    name:"Afsin Hassn",
                    text : "I love your videos. But I admit that the most impressive thing to me is the way you worship God and establish Him as a priority in your life. You have truly inspired me to strengthen my relationship with God. Thank you Husna!❤️🌹",
                    reply:[]
                },{
                    id:9429853,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[{
                        name:"Afsin Hassn",
                        text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                        reply:[]
                    },
                    {
                        id:242343,
                        name:"Afsin Hassn",
                        text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                        reply:[]
                    },
                    {
                        id:15333333,
                        name:"Afsin Hassn",
                        text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                        reply:[{
                            name:"Afsin Hassn",
                            text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                            reply:[]
                        },
                        {
                            id:14923842934,
                            name:"Afsin Hassn",
                            text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                            reply:[]
                        },
                        {
                            id:134334509,
                            name:"Afsin Hassn",
                            text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                            reply:[]
                        }]
                    }]
                }]
            }
        ]
    },
    {
        id:33222333222,
        name:"Shahnas",
        text:"lorean ipsume asuzm sfhom  shlaul ai l lof ve ohos e lm o",
        reply:[
            {
                id:29433535,
                name:"Afsin Hassn",
                text : "I love your videos. But I admit that the most impressive thing to me is the way you worship God and establish Him as a priority in your life. You have truly inspired me to strengthen my relationship with God. Thank you Husna!❤️🌹",
                reply:[]
            }
        ]
    },
    {
        id:333225553343,
        name:"Shahnas",
        text:"lorean ipsume asuzm sfhom  shlaul ai l lof ve ohos e lm o",
        reply:[
            {
                id:7777777,
                name:"Afsin Hassn",
                text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                reply:[]
            }
        ]
    },
    {
        id:5454535332224,
        name:"Shahnas",
        text:"lorean ipsume asuzm sfhom  shlaul ai l lof ve ohos e lm o",
        reply:[
            {
                id:23433234234232,
                name:"Afsin Hassn",
                text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                reply:[{
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:2222222222,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:8888889888,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:9090909090909,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                }]
            }
        ]
    },
    {
        id:7813478781999,
        name:"Shahnas",
        text:"lorean ipsume asuzm sfhom  shlaul ai l lof ve ohos e lm o",
        reply:[
            {
                id:4324224224242,
                name:"Afsin Hassn",
                text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                reply:[]
            }
        ]
    },
    {
        id:8889988999999,
        name:"Shahnas",
        text:"lorean ipsume asuzm sfhom  shlaul ai l lof ve ohos e lm o",
        reply:[
            {
                id:2348982843898888,
                name:"Afsin Hassn",
                text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                reply:[{
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:99999222299,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                },
                {
                    id:22228899922244,
                    name:"Afsin Hassn",
                    text : "sasddfh asfah  asdhafd ahakjfa  afhakjd",
                    reply:[]
                }]
            }
        ]
    },
    
    

]
const CommentsContainer =  ()=>{
    return(
        <div>
            <h1 className="font-extrabold text-2xl my-5 sm:my-0 ">
                Comments
                
            </h1>
            <CommentList comments={commentsData} />

           
           

        </div>
    )
}
export default  CommentsContainer;