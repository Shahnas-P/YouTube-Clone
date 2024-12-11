import { useDispatch } from "react-redux";
import Button from "./Button";
import { toggleMenu } from "../Utils/appSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const ButtonList = ()=>{
    const list = ["All","Romantic Comedies","Masala films","Music","HTML","Computer programming","Mysteries","Live","Recently uploaded","Watched","New to you","safdaf","afdafdadfadf","adfdafdadf","dafafadfaf","adfadfafdadf"]
    const dispatch = useDispatch()
    const openSidebar = ()=>{
        dispatch(toggleMenu())
    }
    return(
        //flex   overflow-x-scroll no-scrollbar 
        <div className="sm:mt-2  sm:mx-2  w-96 h-5">
                        {/* <i className=" block md:hidden  lg:hidden fa-solid fa-compass   text-2xl" onClick={openSidebar}></i> */}

            <Swiper
          navigation={true} modules={[Navigation]} className="mySwiper"
            >
            {list.map((list)=>(
                <SwiperSlide
                key={list}
                // style={{
                //     width: "auto",
                // }}
                >
 <Button  name={list}/>
                </SwiperSlide>
               ))}
            </Swiper>
        
            
        </div>
    )
}
export default ButtonList;